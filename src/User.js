import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  const { username, lastname, age } = props;
  return (
    <div>
      <h3>Usuario identificado: {username} </h3>
      <p>Apellido: {lastname}</p>
      <span>Edad: {age}</span>
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.number,
};

export default User;
