import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import { Card } from "./layout/UI/Card";

export const Posts = () => {

    // & useState hook 
    const [data , setData] = useState([]);

    const getPostData = async() => {
        const res = await getPost();
        console.log(res);
        setData(res.data);
   }

  useEffect(()=> {
    getPostData();

  },[]);

  return (
    <section className="section-post">
      <ul>
        {
            data.map((currData) => {
                return <Card key={currData.id} currData = {currData}/>;
            })
        }
      </ul>
    </section>
  )
}