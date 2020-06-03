import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import styled, { keyframes } from "styled-components";

import { signInRequest } from "~/store/modules/auth/actions";

import logo from "~/assets/logo.svg";

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
  email: Yup.string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatorio"),
  password: Yup.string().required("A senha é obrigatoria"),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <Fade>
      <img src={logo} alt="goBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>
        <Link to="/register">Criar uma conta gratuita</Link>
      </Form>
    </Fade>
  );
};

export default SignIn;
