import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const clickHandler = () => {
    title = 'hello people'
    console.log(title);
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={clickHandler}>change title</button>
    </React.Fragment>
  );
};

// const clickHandler = (event, title) => {
//   console.log(title);
// }

export default ErrorExample;
