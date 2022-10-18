import { useState } from "react";
import React from "react";
import Form from "./Form";
import Output from "./output";

 
function FormControl() {
 
  const [viewForm,setViewForm] = useState(true);
  const [title,setTitle] = useState('');

  const newTitle = (e) => {
    setTitle(e.target.value)
  
  }
  function onButtonSubmit(){
      setViewForm(!viewForm)
  }
 
  
  return (
		<div>
		  <h1>Hello World!</h1>
      {viewForm && <Form pTitle = {title} onClick={onButtonSubmit} setNewVal= {newTitle}/>}
      {!viewForm && <Output onClick={onButtonSubmit} oTitle = {title}/>}
      {console.log(title)}
		</div>
  );
}

export default FormControl