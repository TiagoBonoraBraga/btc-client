import { BoxForm, LoginForm } from './MoleculesStyle/Form';
import FormInput, { InputProps } from '../atoms/FormInput.js'
import React, { FormEvent, useState } from 'react'

import { LoginRequest } from '../../utils/types/requests';
import Logo from '../atoms/Logo';
import SubmitButton from '../atoms/SubmitButton.js';
import { api } from '../../utils/api/api';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const loginPayload: LoginRequest = {
      email: email,
      password: password,
    };

    const userData = await api.login(loginPayload);
    // localStorage.setItem("userId", userData.user.id);

    if (!userData) {
      setError(true);
      return;
    }
     if(loginPayload.password == "Senha123"){
       navigate("/admin");

     } else {

       navigate("/user");
     }
  }

  // ddd

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  }

  return (
    <LoginForm>
      <BoxForm onSubmit={handleSubmit}>
        <Logo />

        <FormInput
          label='Email:'
          id='email'
          type="text"
          value={email}
          setValue={setEmail}
          placeholder='Digite seu nome:'
          onKeyDown={handleKeyDown} required={''} />

        <FormInput
          label='Senha:'
          id='senha'
          type="password"
          value={password}
          setValue={setPassword}
          placeholder='Digite sua senha:'
          onKeyDown={handleKeyDown} required={''} />

        <SubmitButton title='Login' />
      </BoxForm>
    </LoginForm>
  )
};


export default Form


// function handleSubmit(arg0: React.FormEvent<HTMLFormElement>) {
//   throw new Error('Function not implemented.');
// }

