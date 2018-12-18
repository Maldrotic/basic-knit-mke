import React from 'react';

const CardContent = (props) => (
  <div className={`card__content ${props.className}`}>
    {props.children}
  </div>
);

export default CardContent;