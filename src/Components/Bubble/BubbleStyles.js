import styled from "styled-components";


export const BubbleContainer = styled.div`
width: 100%;
margin: 20px;
display: flex;
justify-content: space-evenly;
align-items: center;
overflow: hidden;
gap: 15px;
`

export const BubbleStyled = styled.div`
min-width:140px;
animation: scroll 40s linear infinite;
    -webkit-animation: scroll 40s linear infinite;

display: flex;
justify-content: center;
align-items: center;
img {
    text-align: center;
    width: 130px;
    
}

@keyframes scroll {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(calc(-200px * 7));
        transform: translateX(calc(-200px * 7));
    }
}
`