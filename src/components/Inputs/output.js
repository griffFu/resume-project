import React, { useState } from "react";


function Output({onClick,oTitle}){

return(
    <div>
        {oTitle}
        <button onClick={onClick}>BACK TO FORM</button>
    </div>
)

};

export default Output
    