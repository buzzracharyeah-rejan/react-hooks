import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'rejan',
    age: 22,
    message: 'say hello'
  }); 

  // const [name,setName] = useState('rejan');
  // const [age,setAge] = useState(22); 
  // const [message, setMessage] = useState('say hi'); 

  const changeMessage = () => {
    setPerson({...person, message: 'hello from the other world'});
    // setMessage('say hello from the other world');
  }
  // console.log(person)
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      {/* <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3> */}
      <button className="btn" onClick={changeMessage}>Change Message</button>
    </React.Fragment>
  )
};

export default UseStateObject;
