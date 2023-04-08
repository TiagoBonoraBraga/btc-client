import { BoxForm, LoginForm } from './MoleculesStyle/Form';
import FormInput, { InputProps } from '../atoms/FormInput.js'
import React, { FormEvent } from 'react'

import Logo from '../atoms/Logo';
import SubmitButton from '../atoms/SubmitButton.js';

// import SubTitulo from '../atoms/SubTitulo.js';


export interface FormProps<T = FormEvent<HTMLFormElement>> {  
  onSubmit: (value: T) => void;
}

const Form = ({ onSubmit}: FormProps) => {

    function handleChange(): void {
        throw new Error('Function not implemented.')
    }

  return (
    <LoginForm>
        <BoxForm onSubmit={onSubmit}>
            <Logo/>
            <FormInput label='Email:' id='email' placeholder={'Digite seu nome:'} onChange={handleChange}/>
            <FormInput label='Senha:' id='Senha' placeholder={'Digite sua senha:'} onChange={handleChange}/>
            <SubmitButton title='Login'/>
        </BoxForm>
    </LoginForm>
  )
}

export default Form
