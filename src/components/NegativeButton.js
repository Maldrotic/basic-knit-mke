import React from 'react';
import Button from './button';

const NegativeButton = (props) => (
  <Button className='button--negative'>
    {props.children}
  </Button>
);

export default NegativeButton;