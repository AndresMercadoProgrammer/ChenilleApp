import React from "react";
import {
  ContainerNavbar,
  IconsContainerStyled,
  NavContainerStyled,
} from "./NavbarStyles";
import { Button, IconButton } from "@chakra-ui/react";
import { BiCart, BiHeart } from "react-icons/bi";
import { ButtonCircle } from "../UI/Buttons/ButtonCircle/ButtonCircle";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/ToggleCartSlice/ToggleCartSlice";
import SearchBar from "../SearchBar/SearchBar";
import { PiUserCircleFill } from "react-icons/pi";

export const Navbar = () => {
  const { isLogin, user } = useSelector((state) => state.authSlice);

  const dispatch = useDispatch();

  return (
    <>
      <NavContainerStyled>
        <ContainerNavbar>
          <h2>
            <NavLink to="/">CHENILLE</NavLink>
          </h2>
          <SearchBar />
        </ContainerNavbar>

        <IconsContainerStyled>
          <NavLink onClick={() => dispatch(toggleCart())} to="#">
            <ButtonCircle $bkg="#504344">
              <BiCart className="cart_icon" />
            </ButtonCircle>
          </NavLink>
          <NavLink to="#">
            <ButtonCircle $bkg="#504344">
              <BiHeart className="heart_icon" />
            </ButtonCircle>
          </NavLink>
          {isLogin ? (
            <IconButton size="lg" aria-label="Search database">
              <PiUserCircleFill />
            </IconButton>
          ) : (
            <NavLink to="/Login">
              <ButtonCircle $bkg="#272122" $color="white" $border="">
                Login / Register
              </ButtonCircle>
            </NavLink>
          )}
        </IconsContainerStyled>
      </NavContainerStyled>
    </>
  );
};
