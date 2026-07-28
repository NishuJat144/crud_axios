import axios from "axios";

// * Creating instance of axios
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

// * GET POST 
export const getPost = () => {
     return api.get("/posts")
    
} 

// * DELETE POST
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}