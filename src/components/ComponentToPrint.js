import React from "react";
import Form from "./Inputs/Form";


const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <Form />
        </div>
    );
  });


export default ComponentToPrint


