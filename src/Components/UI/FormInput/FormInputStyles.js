import styled from "styled-components";

export const FormInputStyled = styled.input`
  background-color: transparent;
  padding: 4px 5px;
  border: 2px solid tomato;
  font-size: 1rem;
  margin: 10px;
  width: 70%;

 
  text-align: ${({ as }) => (as === "textarea" ? "left" : "center")};
  height: ${({ as }) => (as === "textarea" ? "130px" : "auto")};
  resize: ${({ as }) => (as === "textarea" ? "vertical" : "none")};
  white-space: ${({ as }) => (as === "textarea" ? "pre-wrap" : "normal")};
  word-wrap: break-word;

  &::placeholder {
    color: rgb(139, 136, 136);
    font-size: 12px;
    text-align: ${({ as }) => (as === "textarea" ? "left" : "center")};
  }

  &:focus {
    outline: none;

    &::placeholder {
      font-size: 11px;
    }
  } 
`;
export const ErrorStyled = styled.p`
font-size: .7rem;
color:tomato
`