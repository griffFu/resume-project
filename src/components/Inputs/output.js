import React, { useState } from "react";


function Output({onClick,oTitle}){

return(
    <div className="flex flex-col bg-red-700 p-8" >
        <div className>Full Name</div>
        <div>{oTitle}</div>
        <button classname="text-blue-400" onClick={onClick}>BACK TO FORM</button>
    </div>
)

};

export default Output
    