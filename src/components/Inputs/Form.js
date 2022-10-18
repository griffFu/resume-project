import React, { useState } from "react";


function Form({pTitle, onClick, setNewVal}){
    
   
    const handleSubmit = (e) => {
        e.preventDefault()
      } 

    return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>Blog title</label>
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