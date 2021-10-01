import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email,setEmail] = useState(''); 
  const [people,setPeople] = useState([]); 

  const handleSubmit = event => {
    event.preventDefault();
    if(firstName && email) {
      // const person = {firstName, email};
      setPeople((prevValue) => {
        return [...prevValue, {id: Math.random(), firstName, email}]; 
      });
      setFirstName(''); 
      setEmail('');
      // const person = {firstName, email}; 
      // console.log(person)
      // setPeople(people.push(person)); 
    } else {
      console.log('empty values'); 
    }
    
  }
  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
          type='email'
          id='email' 
          value={email}
          onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <button type='submit'>Add person </button>
      </form>
      {
        people.map(person => {
          const {id, firstName, email} = person; 
          return (
            <div className='item' key={id}>
              <h4 >{firstName}</h4>
              <p>{email}</p>


            </div>
          )
        })
      }
    </article>
  );
};

export default ControlledInputs;
