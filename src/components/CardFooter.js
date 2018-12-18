import React from 'react';

const CardFooter = (props) => (
  <div className={`card__footer ${props.className}`}>
    {props.children}
  </div>
);

export default CardFooter;