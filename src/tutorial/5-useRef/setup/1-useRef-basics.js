import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements
const UseRefBasics = () => {
  const refContainer = useRef(null); 

  const submitHandler = e => {
    e.preventDefault(); 
    console.log(refContainer.current.value);
  }

  useEffect(() => {
    refContainer.current.focus(); 
    refContainer.current.value = '';
  })
  console.log(refContainer);
  return (
    <form className='form' onSubmit={submitHandler}>
      <div>
        <input type="text" ref={refContainer}/>
        <button className="btn">submit</button>
      </div>
    </form>
  )
};

export default UseRefBasics;
