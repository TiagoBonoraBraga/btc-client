import { Buttom } from './AtomsStyles/SubmitButton';
import React from 'react'

type SubmitButton = {
    title: string;
    
 }

const SubmitButton = ({title}: SubmitButton) => {
  return (
    <Buttom type='submit'>{title}</Buttom>
  )
}

export default SubmitButton
