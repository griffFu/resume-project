import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ComponentToPrint  from './ComponentToPrint'

export const Print = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <>
        <ComponentToPrint ref={componentRef} />
        <button onClick={handlePrint}>Print this out!</button>
      </>
    );
  };

