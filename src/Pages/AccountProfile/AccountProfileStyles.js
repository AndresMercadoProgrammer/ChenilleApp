import styled from "styled-components";

export const AccountProfileContainer = styled.div`
width: 100%;

display: flex;
gap: 10px;
`

export const MenuLateral = styled.div`
background-color: #E8E8EA;
display: flex;
gap: 10px;
flex-direction: column;
width: 20%;
h3 {
    font-size: 20px;

   padding: 30px 15px;
}



p {
    padding: 10px;
    padding-left: 30px;
    position: relative;
}
p::after {
    position: absolute;
    top: 100%;
    left: 20%;
    content: '';
        width: 30%;
        height: 4px;
        color:blue;
        background-color: red;
        opacity: 0;
        transition: opacity 0.2s ease-out;
}
p:hover::after {
    opacity: 1;
}


.selected > p{
    color: red;
}

`

export const Resume = styled.div`
width: 100%;
padding: 25px  50px;
h2 {
    font-size: 30px;
}

`

export const ContainerGralResume = styled.div`
background-color: red;
display: flex;
flex-direction: column;
`
export const TitleContainerResume = styled.h3`
font-size: 18px;
background-color: #bdbbbb;
padding: 10px;

`

export const ContainerMyDataResume = styled.div`
background-color: #bdbbea;
padding: 30px;
 
 a {
    color:red;
    
 }
`

export const ContainerMyAdressResume = styled(ContainerMyDataResume)`
display: flex;
align-items: center;
justify-content: space-between;


`