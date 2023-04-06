import FormInput, { InputProps } from '../../atoms/FormInput/index.tsx.js'
import React, { FormEvent } from 'react'

import SubTitulo from '../../atoms/SubTitulo/index.js';
import SubmitButton from '../../atoms/SubmitButton/index.js';

export interface FormProps<T = FormEvent<HTMLFormElement>> {  
  onSubmit: (value: T) => void;
}

const Form = ({ onSubmit}: FormProps) => {

    function handleChange(): void {
        throw new Error('Function not implemented.')
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <SubTitulo titulo='HyperDash'/>
            <FormInput label='Email:' id='email' placeholder={'Digite seu nome:'} onChange={handleChange}/>
            <FormInput label='Senha:' id='Senha' placeholder={'Digite sua senha:'} onChange={handleChange}/>
            <SubmitButton title='Login'/>
        </form>
    </div>
  )
}

export default Form
