import { InputForm, LabelForm } from './AtomsStyles/FormInput';

import React from 'react'

export type InputProps = {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  setValue: any;
  type: string;
  
}

const FormInput = ({ label, id, placeholder,  setValue, value, type}: InputProps) => {
  return (
    <>
      <LabelForm htmlFor="id">{label}</LabelForm>
      <InputForm 
        id={id} 
        name={id}
        type={type} 
        placeholder={placeholder} 
        onChange={({ target }) => setValue(target.value)}
        value={value}
        
         />
    </>
  )
}

export default FormInput
