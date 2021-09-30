import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    const resp = await fetch(url); 
    const users = await resp.json(); 
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <h3>Github users</h3>
      <ul className='users'>
      {users.map(user => {
        const {id, login, avatar_url, html_url} = user; 
        return (
          <li key={id}> 
          <img src={avatar_url} alt="avatar" />
            <div> 
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        )
      })}

      </ul>

    </React.Fragment>
  )
};

export default UseEffectFetchData;
