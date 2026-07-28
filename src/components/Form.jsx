import { useState } from "react"
import { addPost } from "../api/PostApi";

export const Form = ({data , setData}) => {

    // * State hook
    const [postData , setPostData] = useState({
        title : "" ,
        body : "" ,
    });

    // * Handler to handle input data
    const handleInputChange = (e) => {
       const name = e.target.name ;
       const value = e.target.value;

       setPostData((prev) => {
        // console.log(prev);
        return {
            ...prev,
            [name] : value
        };
       });
    };
    
    const  addPostData = async() => {
        const res = await addPost(postData);
        console.log("res" ,res);
        
        if(res.status === 201){
            setData([...data , res.data]);
            setPostData({title : "" , body : ""});
        }
    }

    //* FORM SUBMISSION HANDLER
       const handleFormSubmit = (e) => {
           e.preventDefault();
           addPostData();
       }
  

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input type="text" autoComplete="off" id="title"
                 name="title" placeholder="Add Title"
                 value={postData.title} 
                 onChange={handleInputChange}/>
            </div>

            <div>
                <label htmlFor="body"></label>
                <input type="text" 
                autoComplete="off" 
                placeholder="Add Post" id="body" name="body" 
                value={postData.body}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}