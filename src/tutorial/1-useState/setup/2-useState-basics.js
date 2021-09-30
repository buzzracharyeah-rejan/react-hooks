import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('bananas');
  // console.log(useState('say hello'));
  // const value = useState(1)[0]; 
  // const handler = useState(1)[1]; 
  // console.log(value, handler); 
  const clickHandler = () => {
    if(text === 'bananas') {
      setText('apples');
    } else {
      setText('bananas');
    }
  }
  
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={clickHandler}>change title</button>
    </React.Fragment>
  );
};


export default UseStateBasics;
