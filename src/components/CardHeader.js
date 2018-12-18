import React from 'react';

const CardHeader = (props) => (
  <div className={`card__header ${props.className}`}>
    {props.children}
  </div>
);

export default CardHeader;