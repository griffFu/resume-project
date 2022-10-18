import React from "react";
import Form from "./Inputs/Form";
import FormControl from "./Inputs/FormControl";


const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <FormControl />
        </div>
    );
  });


export default ComponentToPrint


