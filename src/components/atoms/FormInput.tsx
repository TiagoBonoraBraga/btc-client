import { InputForm, LabelForm } from './AtomsStyles/FormInput';

import React from 'react'

export type InputProps = {
  label: string;
  id: string;
  placeholder: string;
  onChange: ()=>void;
}

const FormInput = ({label, id, placeholder, onChange, ...props}: InputProps) => {
  return (
    <>
    <LabelForm htmlFor="text">{label}</LabelForm>
    <InputForm type="text" id={id} placeholder={placeholder} {...props} onChange={onChange} required/>
    </>
  )
}

export default FormInput
