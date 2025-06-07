import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: #473c3e;
  color: white;
  position: relative;
  justify-content: center;
  z-index: 200;

   .navlink {
    width: 100%;
   }
`;

export const ContainerList = styled.ul`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  
`;
export const LiFirstLVL = styled.li`
display: flex;
justify-content: center;
align-items: center;
  width: 100%;
  position: relative;
  text-align: center;
  font-weight: 700;
  height: 100%;
  z-index: 200;
  
  .first_nav_link {
    width: 100%;
  }
`;





export const ListContainer = styled.ul`
  width: 100%;
  position: absolute;
  top: 103%;
  text-align: center;
  z-index: 200;
  background-color: #473c3e;
  
 


`;
export const ListItem = styled.li`
  text-align: start;
  color: black;

  padding: 8px 8px 8px 8px;
 font-size: small;
 z-index: 200;
  background-color: black;
  color: white;
`;
