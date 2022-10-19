import React, { useState } from "react";


function Output({onClick,info}){

return(
    <div className="flex flex-col bg-red-700 p-8" >
        <div className>Full Name</div>
        <div>{info.firstName}</div>
        <div>{info.lastName}</div>
        <div classname="text-blue-400">
            <button className="bg-blue-700 p-1" onClick={onClick}>BACK TO FORM</button>
        </div>
    </div>
)

};

export default Output
    