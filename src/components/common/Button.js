import React from 'react';

const Button = (props) => (
  <button id={props.id} className={`button ${props.className}`} disabled={props.disabled} onClick={props.onClickHandler}>
    {props.children}
  </button>
);

export default Button;