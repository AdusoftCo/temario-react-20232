import React from 'react';

const Props = ({ nombre, apellido }) => {
      
  return (
    <div>
      <h1>Props</h1>
      <h1>{nombre}</h1>
      <h1>{apellido}</h1>
    </div>
  );
};

export default Props;