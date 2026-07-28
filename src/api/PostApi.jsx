import axios from "axios";

// * Creating instance of axios
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

// * GET METHOD
export const getPost = () => {
     return api.get("/posts")
    
} 