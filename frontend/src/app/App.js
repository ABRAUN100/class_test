import React ,{useState} from "react";
import Layout from "../layout/Layout";
import Form from "../components/Form/Form";
import PictureUP from "../components/PictureUp/PictureUp";
import "../style/global.css";
import{v4 as uuid} from "uuid";

const App = ()=> {
  const [PictureData,setPictureData]=useState([
    {id: uuid() , name:"picture l", url:"2", },
  ]);


  const PictureDataUpLoad= (toup) =>{
    const newTodo={
    id:uuid(),
    name:toup,
    URL:toup,
   };
   setPictureData(prevTodoList => [...prevTodoList,newTodo]);
  };

  return (
    <Layout>
      <div className='app-main-container'>
      <Form PictureDataUpLoad={PictureDataUpLoad}/>
      <PictureUP list={PictureData}/>
      </div>
    </Layout>
  )
}

export default App