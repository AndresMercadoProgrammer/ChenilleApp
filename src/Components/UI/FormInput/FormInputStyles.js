import styled from "styled-components";

export const FormInputStyled = styled.input`
text-align:center;
background-color: transparent;
padding: 4px 5px;
border: 2px #504344 solid;
font-size: 12px;

    &::placeholder {
        color:#94807b;
        font-size: 12px;;
         text-align: ${({ as }) => (as === "textarea" ? "left" : "center")};
    }
&:focus {
    text-align: center;
outline:none;
   &::placeholder {
    text-align:center;
    font-size: 11px;
    
    }
  
}

 
  text-align: ${({ as }) => (as === "textarea" ? "left" : "center")};
  height: ${({ as }) => (as === "textarea" ? "130px" : "auto")};
  resize: ${({ as }) => (as === "textarea" ? "vertical" : "none")};
  white-space: ${({ as }) => (as === "textarea" ? "pre-wrap" : "normal")};
  word-wrap: break-word;

  

 
  
   
`;
export const ErrorStyled = styled.p`
font-size: .7rem;
color:tomato
`