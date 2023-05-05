import { BoxForm, LoginForm } from './MoleculesStyle/Form';
import FormInput, { InputProps } from '../atoms/FormInput.js'
import React, { FormEvent, useState } from 'react'

import { LoginRequest } from '../../utils/types/requests';
import Logo from '../atoms/Logo';
import SubmitButton from '../atoms/SubmitButton.js';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const loginPayload: LoginRequest = {
      email: email,
      password: password,
    };
    console.log(loginPayload)
    setEmail("");
    setPassword("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  }

  return (
    <LoginForm>
        <BoxForm onSubmit={handleSubmit}>
            <Logo/>

            <FormInput 
          label='Email:'
          id='email'
          type="text"
          value={email}
          setValue={setEmail}
          placeholder='Digite seu nome:'
          onKeyDown={handleKeyDown} required={''}            />

            <FormInput 
          label='Senha:'
          id='senha'
          type="password"
          value={password}
          setValue={setPassword}
          placeholder='Digite sua senha:'
          onKeyDown={handleKeyDown} required={''}            />

            <SubmitButton title='Login'/>
        </BoxForm>
    </LoginForm>
  )
}

export default Form


