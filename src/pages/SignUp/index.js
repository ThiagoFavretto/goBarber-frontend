import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import styled, { keyframes } from "styled-components";

import logo from "~/assets/logo.svg";

import { signUpRequest } from "~/store/modules/auth/actions";

const opacityAnimation = keyframes`
  0% {
    opacity: 0
  }

  100% {
   opacity: 1
  }
`;

const Fade = styled.div`
  animation: ${opacityAnimation} 0.5s linear;
`;

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatorio"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatorio"),
  password: Yup.string()
    .min(6, "A senha precisa ter no minimo 6 caracteres")
    .required("A senha é obrigatoria"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));
  };

  return (
    <Fade>
      <img src={logo} alt="goBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
          {loading ? "Carregando..." : "Criar conta"}
        </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </Fade>
  );
};

export default SignUp;
