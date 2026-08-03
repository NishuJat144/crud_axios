import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import { Card } from "./layout/UI/Card";
import { Form } from "./Form";

export const Posts = () => {

    // & useState hook 
    const [data , setData] = useState([]);
    const [updateDataApi , setUpdateDataApi] = useState({});


    const getPostData = async() => {
        const res = await getPost();
        console.log(res);
        setData(res.data);
   }
  useEffect(()=> {
    getPostData();

  },[]);

  return (
    <>
    <section className="section-form">
      <Form data = {data} 
      setData = {setData}
      updateDataApi = {updateDataApi}
      setUpdateDataApi = {setUpdateDataApi}
      />
    </section>
    <section className="section-post">

      <ul>
        {
            data.map((currData) => {
                return <Card key={currData.id} 
                currData = {currData} data = {data} 
                setData = {setData}
                setUpdateDataApi={setUpdateDataApi}/>;
            })
        }
      </ul>
    </section>
    </>
  )
}