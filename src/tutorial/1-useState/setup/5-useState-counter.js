import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0); 
  const increaseLater = () => {
    setTimeout(() => {
      // setCounter(counter + 1);
      setCounter((prevState) => prevState + 1)
    }, 1000);
  }

  return (
    <React.Fragment>
      <div className="container">
        <h3>regular counter</h3>
        <h1>{counter}</h1>
        <button className="btn" onClick={() => setCounter(counter - 1)}>decrease</button>
        <button className="btn" onClick={() => setCounter(0)}>reset</button>
        <button className="btn" onClick={() => setCounter(counter + 1)}>increase</button>
      </div>

      <section style={{margin:'4rem 0'}}>
        <h2>More complex counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={() => increaseLater()}>incraese later</button>

      </section>
    </React.Fragment>
  )
};

export default UseStateCounter;
