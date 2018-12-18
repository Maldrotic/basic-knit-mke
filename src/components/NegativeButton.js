import React from 'react';
import Button from './button';

const NegativeButton = (props) => (
  <Button className='button--negative'>
    {props.text}
  </Button>
);

export default NegativeButton;