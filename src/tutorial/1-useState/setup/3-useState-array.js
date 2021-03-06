import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = id => {
    // let newPeople = people.filter(person => person.id !== id);
    // setPeople(newPeople); 
    setPeople(prevValue => prevValue.filter(person => person.id !== id));
  }

  return (
    <React.Fragment>
      {
        people.map(person => {
          const {id, name} = person; 
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button className="btn" onClick={() => removeItem(id)}>Delete</button>
            </div>
          )
        })
      }
    <button className="btn" onClick={() => setPeople([])}>Clear All</button>
    </React.Fragment>
  )
};

export default UseStateArray;
