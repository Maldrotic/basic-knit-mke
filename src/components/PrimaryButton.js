import React from 'react';
import Button from './button';

const PrimaryButton = (props) => (
  <Button className='button--primary' {...props}>
    {props.text}
  </Button>
);

export default PrimaryButton;