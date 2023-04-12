import { SubButtom } from './AtomsStyles/Buttons';
import React from 'react'

type SubmitButton = {
    title: string;
    
 }

const SubmitButton = ({title}: SubmitButton) => {
  return (
    <SubButtom type='submit'>{title}</SubButtom>
  )
}

export default SubmitButton
