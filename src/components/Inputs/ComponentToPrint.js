import React from "react";
import Form from "./Form";
import FormControl from "./FormControl";


const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div className="flex  flex-col items-start bg-blue-500" >
                <div>Identification</div>
                <FormControl />
            </div>
        </div>
    );
  });


export default ComponentToPrint


