import React from 'react';

const Card = (props) => (
  <div id={props.id} className={`card ${props.className}`}>
    {props.children}
  </div>
);

export default Card;