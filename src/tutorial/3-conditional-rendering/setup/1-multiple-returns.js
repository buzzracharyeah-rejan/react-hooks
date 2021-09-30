import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true); 
  const [isError, setIsError] = useState(false); 
  const [user, setUser] = useState('default user');
  // const getUser = async () => {
  //   try {
  //     const res = await axios.get(url); 
  //     return res;
  //   } catch(err) {
  //     setIsError(true);
  //   }
  // };

  useEffect(() => {
    axios.get(url)
    .then(resp => {
      if(resp.status >=200 && resp.status < 300) {
        // console.log(resp); 
        const {login, avatar_url, html_url} = resp.data; 
        setUser({login, avatar_url, html_url}); 
        setIsLoading(false);
      } else {
        throw new Error(resp.statusText);
      }
    })
    .catch(err => {
      console.log('print error');
      console.log(err); 
      setIsLoading(false); 
      setIsError(true); 
    }); 
  }, []);

  if(isLoading) {
    return (
    <div>
      <h3>Loading...</h3>
    </div>
    );
  } 

  if(isError) {
    return (
      <div>
        <h3>Error...</h3>
      </div>
    );
  }

  return (
    <div>
      <img src={user.avatar_url} alt="user" />
      <div>
        <h3>{user.login}</h3>
        <a href={user.html_url}>Profile</a>
      </div>
    </div>
    );
};

export default MultipleReturns;
