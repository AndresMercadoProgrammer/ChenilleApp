import styled from "styled-components";

export const ButtonCircleStyled = styled.button`
padding: 5px 20px;
border-radius: 20px;
background-color:${({ $bkg }) => $bkg ? $bkg : 'black'};
color: ${({ color }) => color ? color : 'white'};
border: ${({ border }) => border ? border : 'none'};
font-size: ${({ fontSize }) => fontSize ? fontSize : null};
`