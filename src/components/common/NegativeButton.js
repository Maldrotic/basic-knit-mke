import React from 'react';
import Button from './Button';

const NegativeButton = (props) => (
  <Button className='button--negative'>
    {props.text}
  </Button>
);

export default NegativeButton;