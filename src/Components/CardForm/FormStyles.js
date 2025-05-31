import { Form } from "formik";
import styled from "styled-components";

export const CardFormContainerStyled = styled.div`
margin: 10% 15%;
width: 80%;
padding: 2rem;
display: flex;
justify-content: center;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
overflow: hidden;
position: relative;

`

//  LOGIN //

export const CardFormLogin = styled(Form)`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
gap: 8px;
background-color:white;
position: relative;


`



export const TitleLogin = styled.h2`
color: gray;
font-size: large;

`

export const Instructions = styled.p`
color: #004  ;
font-size: small;
font-weight: 400;
padding: 15px;


`
export const InputUser = styled.input`
text-align:center;
background-color: transparent;
padding: 4px 5px;
border: 2px tomato solid;
font-size: 12px;

    &::placeholder {
        color: #bdbdbd;
        font-size: 12px;;
    }
&:focus {
    text-align: center;
outline:none;
   &::placeholder {
    text-align:center;
    font-size: 11px;
    
    }
  
}
`

export const InputPass = styled(InputUser)`
`

export const ForgotPass = styled.p`
color: tomato;
font-size: .9em;
margin: 8px;
text-decoration: underline ;
`

export const LoginButton = styled.button`
color:tomato;
border: 1px black solid;
border-radius: 20px;
padding: 5px 30px;

`
//  REGISTER //

export const CardFormRegister = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
gap: 8px;
background-color:white;
position: relative;



`

export const TitleRegister = styled(TitleLogin)`
margin-top: 10px;

`





