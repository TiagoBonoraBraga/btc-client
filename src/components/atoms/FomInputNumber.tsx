import { InputForm, LabelForm } from './AtomsStyles/FormInput';
import React from 'react'

export type InputNumberProps = {
  label: string;
  id?: string;
  placeholder: string;
  defaultValue: number;
  required: string;
  setDefault: React.Dispatch<React.SetStateAction<number>>;
  type?: React.HTMLInputTypeAttribute;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputNumber = ({ label, id, placeholder, type, setDefault, defaultValue, onKeyDown, onChange }: InputNumberProps) => {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    onKeyDown && onKeyDown(e);
  }

  return (
    <>
      <LabelForm htmlFor={id}>{label}</LabelForm>
      <InputForm 
        id={id} 
        name={id}
        value={defaultValue}      
        type={type}
        onChange={(e) => {
          const inputValue = e.target.value;
          const numericValue = parseFloat(inputValue);
          setDefault(numericValue);
          onChange && onChange(e);
        }}
        placeholder={placeholder} 
        required
        onKeyDown={handleKeyDown}
      />
    </>
  )
}

export default FormInputNumber;


