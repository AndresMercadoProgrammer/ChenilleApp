import styled from "styled-components";

export const ShopStyled = styled.div`
width: 100%;
color: black;

background-color: #fff;
font-size: 1.1em;
display: flex;
align-items:center;

flex-direction: column;



 p {
    font-size: small;
 }
`


export const HeaderMenuSection = styled.div`
width: 70%;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
z-index: 50;
background-color: #fff;

padding-top: 20px;
`

export const ProductsCardsSectionStyled = styled.div`
width: 80%;
display: grid;
grid-template-columns: repeat(
   auto-fit,
   minmax(
      250px,
      1fr
   )
);
margin: 20px 0 20px 0;
gap: 10px;

`