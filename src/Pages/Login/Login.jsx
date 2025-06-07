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
} from "../../Components/Forms/FormStyles";
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
            <InputUser placeholder="username"></InputUser>
            <InputPass type="password" placeholder="password"></InputPass>
            <ForgotPass>
              <NavLink to="#">Forgot your pass?</NavLink>
            </ForgotPass>
            <NavLink to="/register">
              you dont have an account? Register Here
            </NavLink>
            <LoginButton>Login</LoginButton>
          </CardFormLogin>
        </CardFormContainerStyled>
      </Formik>
    </>
  );
};
