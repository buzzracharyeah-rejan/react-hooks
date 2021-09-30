import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [counter, setCounter] = useState(0);
  const name = 'rejan';

  useEffect(() => {
    // console.log('use effect'); 
    if(counter)
    document.title = `New message ${counter}`; 
  }, [counter]);
  // console.log('render');
  return (
    <React.Fragment>
      <h3>{counter}</h3>
      <button className="btn" onClick={() => {setCounter(counter + 1)}}>
        Click me
      </button>
    </React.Fragment>
  )
};

export default UseEffectBasics;
