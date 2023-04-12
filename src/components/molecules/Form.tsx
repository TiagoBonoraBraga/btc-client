import { BoxForm, LoginForm } from './MoleculesStyle/Form';
import FormInput, { InputProps } from '../atoms/FormInput.js'
import React, { FormEvent, useState } from 'react'

import Logo from '../atoms/Logo';
import SubmitButton from '../atoms/SubmitButton.js';

interface LoginRequest {
  email: string;
  password: string;
}

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
              required
              />

            <FormInput 
             label='Email:' 
              id='password' 
              type="password" 
              value={password}
              setValue={setPassword} 
              placeholder='Digite sua senha:'
              required 
              />

            <SubmitButton title='Login'/>
        </BoxForm>
    </LoginForm>
  )
}

export default Form
