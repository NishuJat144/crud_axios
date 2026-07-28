import { deletePost } from "../../../api/PostApi";

export const Card =({currData ,data , setData}) => {
    const handleDelete = async(id) => {
        try{
             const res = await deletePost(id);
             console.log(res);
        
          // * Error Handling
             if(res.status === 200){
                const newUpdatedData = data.filter((currData) => {
                    return currData.id !== id ;
                });
               setData(newUpdatedData);
            }
             else{
                console.log("Failed to delete the post : " , res.status);
            }
        }
       catch(error){
        console.log(error);
       }
    }

    const {id , title , body} = currData ;
    // console.log(id);
    // console.log(title);
    // console.log(body);
    
    return (
        <li className="list">
            <div className="container">
                <p>{id}.</p>
                <p>Title : {title}</p>
                <p>News : {body}</p>
            <span className="btn">
                <button className="edit">EDIT</button>
                <button className="delete" 
                onClick={()=> {handleDelete(id)}}>
                DELETE</button>
            </span>
            </div>
        </li>
    )
}