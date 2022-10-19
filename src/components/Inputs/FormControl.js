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
      <div className="bg-orange-200 flex justify-center">
        {viewForm && <Form pTitle = {title} onClick={onButtonSubmit} setNewVal= {newTitle}/>}
        {!viewForm && <Output onClick={onButtonSubmit} oTitle = {title}/>}
      </div>
      
		</div>
  );
}

export default FormControl