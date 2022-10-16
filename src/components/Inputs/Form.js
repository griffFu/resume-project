import React, { useState } from "react";



function Form(){
    const [title,setTitle] = useState('');
    const [viewForm,setViewForm] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        setViewForm(viewForm => !viewForm)
    }

    return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>Blog title</label>
            <input 
                type="text"
                required
                value = {title}
                onChange={(e)=> setTitle(e.target.value)}
             />
            <button>submit</button>
        </form>
        
    </div>
    )
};

export default Form;