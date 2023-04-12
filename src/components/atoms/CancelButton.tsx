import { CancButtom } from './AtomsStyles/Buttons';
import React from 'react'

type CancelButton = {
    title: string;
    onClick: () => void;
 }

const CancelButton = ({title}: CancelButton) => {
  return (
    <CancButtom type='submit'>{title}</CancButtom>
  )
}

export default CancelButton