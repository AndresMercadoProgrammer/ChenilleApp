import { Form } from "formik";
import styled from "styled-components";

export const ContactFormContainer = styled(Form)`
margin: 3%;
width:50%;
display: flex;
justify-content: center;
border: 1px black solid;
padding:20px;
position: relative;
flex-direction: column;
justify-content: start;
align-items: center;
`



export const TextAreaStyled = styled.textarea`

background-color: transparent;
padding: 4px 5px;
border: 2px tomato solid;
font-size: 12px;
margin: 10px;
width: 100%;
height: 100px;
resize: vertical;



    &::placeholder {
        color:rgb(138, 131, 131);
        font-size: 12px;;
    }
&:focus {
    
outline:none;
   &::placeholder {
    text-align:center;
    font-size: 11px;
    
    }
}

`
export const ContactTitleStyled = styled.h1`
font-size: 2em;
`

export const SubmitButton = styled.button`
color:#fff;
background-color: tomato;

border-radius: 20px;
padding: 5px 30px;`

