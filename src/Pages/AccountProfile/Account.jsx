import React from "react";
import {
  AccountProfileContainer,
  ContainerGralResume,
  ContainerMyAdressResume,
  ContainerMyDataResume,
  MenuLateral,
  Resume,
  TitleContainerResume,
} from "./AccountProfileStyles";
import { NavLink } from "react-router-dom";

const Account = () => {
  const setClassNameAdded = (e) => {
    e.preventDefault();
    e.target.className = "selected";
  };

  return (
    <>
      <AccountProfileContainer>
        <MenuLateral>
          <h3>My Account</h3>
          <NavLink onClick={(e) => setClassNameAdded(e)}>
            <p>Resume</p>
          </NavLink>
          <NavLink onClick={(e) => setClassNameAdded(e)}>
            <p>My Data</p>
          </NavLink>
          <NavLink onClick={(e) => setClassNameAdded(e)}>
            <p>My Purchases</p>
          </NavLink>
          <NavLink onClick={(e) => setClassNameAdded(e)}>
            <p>My address</p>
          </NavLink>
          <NavLink onClick={(e) => setClassNameAdded(e)}>
            <p>Favorites</p>
          </NavLink>
          <NavLink onClick={(e) => setClassNameAdded(e)}>
            <p>Points</p>
          </NavLink>
        </MenuLateral>
        <Resume>
          <h2>Resume</h2>
          <ContainerGralResume>
            <TitleContainerResume>Mis Datos </TitleContainerResume>
            <ContainerMyDataResume>
              <div>
                <h4>Informacion de Contacto</h4>
                <p>nombre usuario</p>
                <p>email de usuario</p>
                <NavLink to="#">Editar</NavLink>
              </div>
            </ContainerMyDataResume>

            <TitleContainerResume>Mis Direcciones</TitleContainerResume>
            <ContainerMyAdressResume>
              <div>
                <h4>Direccion de facturacion</h4>
                <p>nombre de usuario</p>
                <p>Tel: 3804989844</p>
                <p>Dni: 531351531</p>
                <p>belgrano 640</p>
                <p>La Rioja, La Rioja , 5300</p>
                <NavLink to="#">Editar</NavLink>
              </div>

              <div>
                <h4>Direccion de envio</h4>
                <p>nombre de usuario</p>
                <p>Tel: 3804989844</p>
                <p>Dni: 531351531</p>
                <p>belgrano 640</p>
                <p>La Rioja, La Rioja , 5300</p>
                <NavLink to="#">Editar</NavLink>
              </div>
            </ContainerMyAdressResume>
          </ContainerGralResume>
        </Resume>
      </AccountProfileContainer>
    </>
  );
};

export default Account;
