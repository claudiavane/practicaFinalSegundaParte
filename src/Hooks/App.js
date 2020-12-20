/* eslint-disable */
import React, { useState } from 'react';
import Seconds from './Seconds';

const AppHooks = () => {
  const [showTimer, setShowTimer] = useState(false);
//   const [message, setMessage] = useState('Hola Mundo');
  
  return (
    <div className="AppHooks">
      <h1>Aprender hooks</h1>
      <button className="btn btn-primary" onClick={() => setShowTimer(!showTimer)}>{!showTimer ? 'Start Timer': 'Stop Timer'}</button>
      { !showTimer ? (
          <div className="alert alert-danger">off</div>
      ) : (
          <div className="alert alert-success">
              Started! <Seconds />
          </div>
      )}
    </div>
  );
};

export default AppHooks;
