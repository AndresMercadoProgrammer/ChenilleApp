import React from "react";
import {
  CardFormContainerStyled,
  CardFormRegister,
  Instructions,
  LoginButton,
  TitleRegister,
} from "../../Components/CardForm/FormStyles";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { registerInitialValues } from "../../Formik/initialValues";
import { FormInput } from "../../Components/UI/FormInput/FormInput";
import { registerValidationSchema } from "../../Formik/validationSchema";
export const Register = () => {
  return (
    <>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <CardFormContainerStyled>
          <CardFormRegister>
            <TitleRegister>Register</TitleRegister>
            <Instructions>Please complete the Form!</Instructions>
            <FormInput
              name="name"
              label="Nombre"
              placeholder="Name"
            ></FormInput>
            <FormInput
              name="lastName"
              label="Apellido"
              placeholder="Lastname"
            ></FormInput>
            <FormInput
              name="email"
              type="email"
              label="Email"
              id=""
              placeholder="Email"
            ></FormInput>
            <FormInput
              name="password"
              type="password"
              placeholder="New Pass"
              label="Password"
            ></FormInput>
            <FormInput
              name="repassword"
              type="password"
              placeholder="Repeat password"
              label="RePassword"
            ></FormInput>
            <Instructions>
              <label htmlFor="checkboxRules">
                <FormInput type="checkbox" name="checkboxRules" id="" />I have
                read and I accept the terms and conditions.
              </label>
            </Instructions>
            <Instructions>
              <span>If you have an account </span>
              <NavLink className="sign_In">Sign In</NavLink>
            </Instructions>
            <LoginButton>Register</LoginButton>
          </CardFormRegister>
        </CardFormContainerStyled>
      </Formik>
    </>
  );
};
