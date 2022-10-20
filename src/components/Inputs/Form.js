import React, { useState } from "react";


function Form({info, onClick, setNewVal}){
    
   
    const handleSubmit = (e) => {
        e.preventDefault()
      } 

    return(
    <div className="flex bg-red-700">
        <form className="p-8" onSubmit={handleSubmit}>
            <div className="pb-2">
                <label>Full Name</label>
            </div>
            <input className=""
                type="text"
                required
                name="firstName"
                value = {info.firstName}
                onChange={setNewVal}
             />
            <div className="pb-2 pt-6">
                <label>Current Title</label>
            </div>
            <input 
                type="text"
                required
                name="lastName"
                value = {info.lastName}
                onChange={setNewVal}
             />
            <button onClick={onClick} className="bg-blue-700 p-1">submit</button>
        </form>
        
    </div>
    )
};

export default Form;