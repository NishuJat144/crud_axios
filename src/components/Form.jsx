import { useEffect, useState } from "react"
import { addPost, updatePost } from "../api/PostApi";

export const Form = ({data , setData , updateDataApi , setUpdateDataApi}) => {

    // * State hook
    const [postData , setPostData] = useState({
        title : "" ,
        body : "" ,
    });

  let isEmpty = Object.keys(updateDataApi).length === 0 ;

    
    // * useEffect hook
    useEffect(()=>{
        updateDataApi && setPostData({
            title : updateDataApi.title || "" ,
            body : updateDataApi.body || "" 
        });
    },[updateDataApi])


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

    // * updatePostData 
    const updatePostData = async(id)=> {
       try{
           const res =  await updatePost(updateDataApi.id , postData);
           console.log(res);
          
          if(res.status === 200) {
              setData((prev) => {
               // console.log(prev);
               return prev.map((currData) => {
                   return currData.id === res.data.id ? res.data : currData ;
               })
             });
        }
          setPostData({title : "" , body : ""});
          setUpdateDataApi({});
     }
      
       catch(error){
        console.log(error);
       }
       
    }

    //* FORM SUBMISSION HANDLER
       const handleFormSubmit = (e) => {
           e.preventDefault();
           const action = e.nativeEvent.submitter.value;
           if(action === "ADD"){
              addPostData();
           }
           else if(action === "EDIT"){
              updatePostData();
           }
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
            <button type="submit" className="f-button"
             value={isEmpty ? "ADD" : "EDIT"}
            >
                {isEmpty ? "ADD" : "EDIT"}</button>
        </form>
    )
}