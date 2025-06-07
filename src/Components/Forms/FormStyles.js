import { Form } from "formik";
import styled from "styled-components";

export const CardFormContainerStyled = styled.div`
margin: 5% 15%;
width: 80%;
padding: 1rem;
display: flex;
justify-content: center;
position: relative;
 
`

//  LOGIN //

export const CardFormLogin = styled(Form)`
width: 50%;
padding: 40px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
gap: 8px;
background-color: #cac2be;
position: relative;

`

export const TitleLogin = styled.h2`
color: #272122;
font-size: large;

`

export const Instructions = styled.p`
color: #004  ;
font-size: small;
font-weight: 400;



`
export const InputUser = styled.input`
text-align:center;
background-color: transparent;
padding: 4px 5px;
border: 2px #504344 solid;
font-size: 12px;

    &::placeholder {
        color:#94807b;
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
color: 504344;
font-size: .9em;
margin: 8px;
text-decoration: underline ;
`

export const LoginButton = styled.button`
color:white;
background-color:#504344;
border-radius: 20px;
padding: 5px 30px;

`
//  REGISTER //

export const CardFormRegister = styled(CardFormLogin)`
width: 65%;
padding:30px 20px;

.sign_In {
    color:#504344;
    font-weight: 700;
}

#termsAndConditions {
    
}
`

export const TitleRegister = styled(TitleLogin)`


`





