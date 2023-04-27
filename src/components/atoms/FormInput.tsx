import { InputForm, LabelForm } from './AtomsStyles/FormInput';

import React from 'react'

export type InputProps = {
  label: string;
  id?: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  type: string;
  required: string
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, id, placeholder, type, setValue, value, onKeyDown, onChange }: InputProps) => {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    onKeyDown && onKeyDown(e);
  }

  return (
    <>
      <LabelForm htmlFor={id}>{label}</LabelForm>
      <InputForm 
        id={id} 
        name={id}
        value={value}      
        type={type}
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange(e);
        }}
        placeholder={placeholder} 
        required
        onKeyDown={handleKeyDown}
      />
    </>
  )
}

export default FormInput




