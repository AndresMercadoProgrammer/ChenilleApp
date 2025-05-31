import styled from "styled-components";


export const FooterWrapper = styled.footer`
margin: 0 auto;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: auto;
gap: 20px;

`
export const PreFooterStyled = styled.div`
width: 50%;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;




& .icon {
    font-size: 3rem;
}

& .title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}

& p {
    font-size: .8em;
}

& input {
    width: 250px;
    height: 35px;
    margin: 20px 0 10px 0;
    border-radius: 15px;
    padding: 3px 8px 3px 8px;
    border: 1px black solid 
}

& .buttonSuscribe {
    width: 250px;
    height: 35px;
    border-radius: 20px;
    padding: 3px 8px 3px 8px;
    background-color: brown;
    color: white;
    border: 1px solid white;

    &:active {
        border: 2px black solid;
    }
}
`

export const SocialMediaStyled = styled.div`
margin-top: 15px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 7px;
font-weight: 600;
& p {
    font-size: 12px;
}
& .social_div_container {
    width:100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    
    & * {
        font-size:27px;
    }
}
`

export const MenuFooterStyled = styled.div`
width: 100%;
display: flex;

& .menu_columns {
width: 100%;
display: flex;
flex-direction: column;
font-size: .9em;
& ul li{
    list-style: none;
    color: black;
    margin-top: 6px;
}

& a {
    color: black;
    text-decoration: none;
    
}
}
`

export const FinalFooterStyled = styled.div`
width: 100%;
height: 82px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 15px;
`