import { CancButtom } from './AtomsStyles/Buttons';
import React from 'react'

type CancelButtonProps = {
  title: string;
  onClick: () => void;
};

 export interface SubmitButtonProps {
  onClick?: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
}

const CancelButton = ({ title, onClick }: CancelButtonProps) => {
  return (
    <CancButtom onClick={onClick}>{title}</CancButtom>
  )
};

export default CancelButton