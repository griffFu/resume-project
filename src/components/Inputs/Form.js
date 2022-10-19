import React, { useState } from "react";


function Form({pTitle, onClick, setNewVal}){
    
   
    const handleSubmit = (e) => {
        e.preventDefault()
      } 

    return(
    <div className="flex bg-red-700">
        <form className="p-8" onSubmit={handleSubmit}>
            <div className="p">
                <label>Full Name</label>
            </div>
            <input 
                type="text"
                required
                value = {pTitle}
                onChange={setNewVal}
             />
            <button onClick={onClick}>submit</button>
        </form>
        
    </div>
    )
};

export default Form;