import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState('default name');
  useEffect(() => {
    const person = data.find(person => person.id === parseInt(id));
    setName(person.name);
  }, [id])

  return (
    <div>
      <h2>{name}</h2>
      <h4>id: {id}</h4>
      <Link to='/people' className='btn'>Back to People</Link>
    </div>
  );
};

export default Person;
