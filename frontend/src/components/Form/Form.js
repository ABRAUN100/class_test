import React, { useState } from "react";
import "./Form.css";

  const Form = ({ PictureDataUpLoad }) => {
  const [nameValue, setnameValue] = useState("");
  const [UrlValue, setUrl] = useState("");

  const NameChange = (event) => {
    setnameValue(event.target.value);
  };
  
 const UrlChange = (event) => {
  setUrl(event.target.value);
  };

 const handleSubmit = (event) => {
    event.preventDefault();
    if (!nameValue) return;
    PictureDataUpLoad(nameValue,UrlValue);
    setnameValue("");
    setUrl("");
 };

 
  return (
    <form onSubmit={handleSubmit} className="form-container"> 
      <input value={nameValue}  onChange={NameChange} type="text" placeholder="title"/>
      <input value={UrlValue}  onChange={UrlChange} type="text" placeholder="image url" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;

