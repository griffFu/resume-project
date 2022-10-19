import React from "react";
import Form from "./Form";
import FormControl from "./FormControl";


const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div className="bg-gray-300">
                <FormControl />
            </div>
        </div>
    );
  });


export default ComponentToPrint


