import styled from "styled-components";

export const ImagesWrapperGridStyled = styled.div`
display: grid;

width: 100%;


grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows:  auto auto auto;
gap: 5px;

 div:first-child {
   img {
      width: 100%;
   }
 }
 div:nth-child(2){
   img {
      width: 100%;
   }
 }
 div:nth-child(3){
   img {
      width: 100%;
   }
 }
 div:nth-child(4){
   
    grid-column: 1 /4;
    
    img {
      width: 100%;
    }
 }
 div:nth-child(5){
   img {
      width: 100%;
   }
 }
 div:nth-child(6){
   img {
      width: 100%;
   }
 }
 div:nth-child(7){
   img {
      width: 100%;
   }
 }
`