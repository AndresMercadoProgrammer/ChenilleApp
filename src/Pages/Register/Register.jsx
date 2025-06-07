import React from "react";
import {
  CardFormContainerStyled,
  CardFormRegister,
  Instructions,
  LoginButton,
  TitleRegister,
} from "../../Components/Forms/FormStyles";
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
        onSubmit={(values) => {}}
      >
        <CardFormContainerStyled>
          <CardFormRegister>
            <TitleRegister>Register</TitleRegister>

            <FormInput
              name="name"
              label="Nombre"
              placeholder="name"
            ></FormInput>
            <FormInput
              name="lastName"
              label="Apellido"
              placeholder="lastname"
            ></FormInput>
            <FormInput
              name="email"
              type="email"
              label="Email"
              id=""
              placeholder="email"
            ></FormInput>
            <FormInput
              name="password"
              type="password"
              placeholder="password"
              label="Password"
            ></FormInput>
            <FormInput
              name="repassword"
              type="password"
              placeholder="repeat password"
              label="RePassword"
            ></FormInput>
            <Instructions>
              <label htmlFor="checkboxRules">
                <FormInput
                  type="checkbox"
                  name="checkboxRules"
                  id="termsAndConditions"
                />
                I have read and I accept the terms and conditions.
              </label>
            </Instructions>
            <Instructions>
              <span>If you have an account </span>
              <NavLink className="sign_In" to="/login">
                Sign In
              </NavLink>
            </Instructions>
            <LoginButton>Register</LoginButton>
          </CardFormRegister>
        </CardFormContainerStyled>
      </Formik>
    </>
  );
};
