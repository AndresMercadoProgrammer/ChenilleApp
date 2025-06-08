import React from "react";

import {
  CardFormContainerStyled,
  CardFormLogin,
  ForgotPass,
  Instructions,
  LoginButton,
  TitleLogin,
} from "../../Components/UI/FormInput/FormInputStyles";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { loginInitialValues } from "../../Formik/initialValues";
import { loginValidationSchema } from "../../Formik/validationSchema";
import { FormInput } from "../../Components/UI/FormInput/FormInput";

export const Login = () => {
  return (
    <>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {}}
      >
        <CardFormContainerStyled>
          <CardFormLogin>
            <TitleLogin>SIGN IN</TitleLogin>
            <Instructions>Please enter your login and password!</Instructions>
            <FormInput name="username" placeholder="username"></FormInput>
            <FormInput
              name="password"
              type="password"
              placeholder="password"
            ></FormInput>
            <ForgotPass>
              <NavLink to="#">Forgot your pass?</NavLink>
            </ForgotPass>
            <NavLink to="/register">
              you dont have an account? Register Here
            </NavLink>
            <LoginButton type="submit">Login</LoginButton>
          </CardFormLogin>
        </CardFormContainerStyled>
      </Formik>
    </>
  );
};
