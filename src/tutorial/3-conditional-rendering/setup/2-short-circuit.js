import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('some text');
  const [isError, setIsError] = useState(false); 
  const toggleError = () => {
    setIsError(!isError);
  }
  return (
    <React.Fragment>
      {isError ? <h1>Error...</h1> : <h1>{text}</h1>}
      <button className="btn" onClick={toggleError}>Toggle error</button>
    </React.Fragment>
  
    );
};

export default ShortCircuit;
