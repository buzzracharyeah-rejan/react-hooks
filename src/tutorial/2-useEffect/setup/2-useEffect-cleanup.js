import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

useEffect(() => {
  console.log('call useEffect')
})

const UseEffectCleanup = () => {
  console.log('render component')
  return <h2>useEffect cleanup</h2>;
};

export default UseEffectCleanup;
