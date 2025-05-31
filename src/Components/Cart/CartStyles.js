
import { motion } from "framer-motion";
import styled from "styled-components";


export const CloseButtonStyled = styled(motion.button)`
width: fit-content;
padding: 15px 0px 0px 15px;

;

.XButton {
  font-size:29px;
color: white;
background-color: black;
clip-path: circle(45%);
margin-bottom: 20px;
}
`

export const EffectBlur = styled.div`

width:100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 999;
display:flex;
opacity: .5;
background-color: white;
filter: blur(1.17rem);

`




export const CartStyled = styled.div`
position: fixed;
display: flex;
flex-direction: column;
width: 28%;
height: 100%;
overflow: auto;
z-index: 1000;
background-color:white;
top: 0;
right: ${({ $active }) => $active ? '-32%' : '0%'};
transition: right 1s ease;

box-shadow: -1px 0px 10px black;

.title {
font-size: x-large;

}

.titleContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
}
`
export const CleanCartButton = styled(motion.button)`
padding: 6px;
border: 1px solid transparent;
border-radius: 20px;
color: white;
background-color: black
`


export const ProductsContainer = styled.div`
display: flex;
width: 100%;
max-height:68%;
flex-direction: column;
justify-content:start;
align-items: center;
gap: 5px;
overflow-y: auto;
overflow-x: hidden;
flex-shrink: 0;
margin-top: 20px;
border-radius:20px;
padding: 4px;
&::-webkit-scrollbar {
    width: 5px;
   
   text-align: center;
    background-color: black;
    
    
}
&::-webkit-scrollbar-thumb {
    background: tomato;
    border-radius: 10px;
    opacity: .2;
    
}

.noProducts {

  margin-top: 40px;
}
`
export const CardCartItem = styled.div`
background-color: #E1E1E1;
display: flex;
min-width: 100%;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 88px;
border: 0px black solid;
margin: 1px 1px 2px 1px;
border-radius:20px;
z-index:100;
flex-shrink: 0;
box-shadow: 2px 2px 6px black;
  .container_data {
    width: 50%;
    padding: 3px;
    
  }
  .price {
    color: blueviolet;
    font-weight: 600;
    font-size: 16px;
    background-image: linear-gradient(#000 , gray , black);
    background-clip: text;
    -webkit-text-fill-color: transparent;
   
  }
`
export const ImgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
width:21%;
 height: 100%;
 flex-shrink: 1;
 img {
    width: 70%;
   max-height: 100%;
   object-fit: cover;
   border-radius: 10px;
 }
 
`
export const ContainerButtons = styled.div`
flex-shrink: 1;

display: flex;
justify-content: space-around;
align-items: center;
 
  .quantity {
    font-weight: 500;
   font-size: 20px;
    border-radius:4px;
    padding: 6px;
 
  }
  .delete {
    font-size: 30px;
    color: tomato;
    margin-left: 5px;
   
    
  }
  .add {
   
    font-size: 20px;
    border: 1px solid #000;
    border-radius: 8px;
    
  }
  .subtract {
    font-size: 20px;
    border: 1px solid #000;
    border-radius: 8px;
  }
`
export const CheckOutContainer = styled.div`
width: 90%;
display: flex;
gap: 4px;
align-items: start;
flex-direction: column;
margin-top: auto;
padding: 20px;

.line {
    width: 50%;
    background-color: black;
    height: .1em;
}

.subtotal {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.shippingCost {
  width: 100%;
  display: flex;
  justify-content: space-between;
}


.total {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
`


