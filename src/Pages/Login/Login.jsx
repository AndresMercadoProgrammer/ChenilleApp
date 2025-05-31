import React from "react";

import {
  CardFormContainerStyled,
  CardFormLogin,
  ForgotPass,
  InputPass,
  InputUser,
  Instructions,
  LoginButton,
  TitleLogin,
} from "../../Components/CardForm/FormStyles";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";

export const Login = () => {
  return (
    <>
      <Formik>
        <CardFormContainerStyled>
          <CardFormLogin>
            <TitleLogin>SIGN IN</TitleLogin>
            <Instructions>Please enter your login and password!</Instructions>
            <InputUser placeholder="Username"></InputUser>
            <InputPass type="password" placeholder="Pass"></InputPass>
            <ForgotPass>
              <NavLink to="#">Forgot your pass?</NavLink>
            </ForgotPass>
            <LoginButton>Login</LoginButton>
          </CardFormLogin>
        </CardFormContainerStyled>
      </Formik>
    </>
  );
};
