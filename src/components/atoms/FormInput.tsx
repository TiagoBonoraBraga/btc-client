import { InputForm, LabelForm } from './AtomsStyles/FormInput';

import React from 'react'

export type InputProps = {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  setValue: any;
  type: string;
  required: boolean
}

const FormInput = ({ label, id, placeholder, type, setValue, value, ...props}: InputProps) => {
  return (
    <>
    <LabelForm htmlFor="id">{label}</LabelForm>
    <InputForm 
      id={id} 
      name={id}
      value={value}      
      type={type}
      onChange={({ target }) => setValue(target.value)}
      placeholder={placeholder} 
      {...props} 
      />
    </>
  )
}

export default FormInput
