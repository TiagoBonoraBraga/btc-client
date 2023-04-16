import { InputForm, LabelForm } from './AtomsStyles/FormInput';

import React from 'react'

export type InputProps = {
  label: string;
  id?: string;
  placeholder: string;
  value: string;
  setValue: any;
  type: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, id, placeholder, type, setValue, value, onKeyDown, ...props}: InputProps) => {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    onKeyDown && onKeyDown(e);
  }

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
      required
      onKeyDown={handleKeyDown}
      {...props} 
      />
    </>
  )
}

export default FormInput



