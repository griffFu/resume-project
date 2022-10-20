import { useState } from "react";
import React from "react";
import Form from "./Form";
import Output from "./output";

 
function FormControl() {
 
  const [viewForm,setViewForm] = useState(true);
  const [title,setTitle] = useState({
    firstName : "",
    lastName : " "
  });

  const newTitle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTitle((prev) => {
      return {...prev, [name]:value}
    })
  }
  function onButtonSubmit(){
      setViewForm(!viewForm)
  }
 
  
  return (
		<>
      <div className="flex justify-center">
        {viewForm && <Form info={title} onClick={onButtonSubmit} setNewVal= {newTitle}/>}
        {!viewForm && <Output onClick={onButtonSubmit} info = {title}/>}
      </div>
      
		</>
  );
}

export default FormControl