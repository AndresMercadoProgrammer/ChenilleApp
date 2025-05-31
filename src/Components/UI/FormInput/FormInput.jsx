import { ErrorMessage, Field } from "formik";
import { ErrorStyled, FormInputStyled } from "./FormInputStyles";

export const FormInput = ({
  name,
  type,
  label,
  isError,
  placeholder,
  isTextArea,
}) => {
  return (
    <>
      <Field
        as={isTextArea ? "textarea" : FormInputStyled}
        name={name}
        type={type}
        id={label}
        error={isError}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={ErrorStyled} />
    </>
  );
};
