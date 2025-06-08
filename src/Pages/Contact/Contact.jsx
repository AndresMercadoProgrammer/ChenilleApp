import React from "react";
import {
  ContactFormContainer,
  ContactTitleStyled,
  SubmitButton,
} from "./ContactStyles";
import { Instructions } from "../../Components/UI/FormInput/FormInputStyles";
import { Formik } from "formik";
import { contactInitialValues } from "../../Formik/initialValues";
import { contactValidationSchema } from "../../Formik/validationSchema";
import { FormInput } from "../../Components/UI/FormInput/FormInput";

export const Contact = () => {
  return (
    <>
      <Formik
        initialValues={contactInitialValues}
        validationSchema={contactValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <ContactFormContainer>
          <ContactTitleStyled>CONTACT US</ContactTitleStyled>
          <Instructions>
            ¿Tienes alguna consulta o quieres hacer un pedido? Completa el
            formulario y nos pondremos en contacto contigo lo antes posible.
            📌Responderemos a tu mensaje lo más rápido posible. 📌 Si es un
            pedido urgente, llámanos o escríbenos directamente. ¡Estamos aquí
            para ayudarte! 😊
          </Instructions>
          <FormInput
            type="text"
            label="Nombre"
            name="name"
            placeholder="Your Name"
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            placeholder="Your Email"
          />
          <FormInput
            type="number"
            label="Phone"
            name="phone"
            placeholder="Phone Number"
          />
          <FormInput
            isTextArea={true}
            label="Mensaje"
            name="message"
            type="textarea"
            placeholder="Your Message"
          />
          <SubmitButton>Submit</SubmitButton>
        </ContactFormContainer>
      </Formik>
    </>
  );
};
