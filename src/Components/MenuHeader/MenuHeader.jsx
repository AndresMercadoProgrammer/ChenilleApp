import React from "react";
import {
  ContainerMenu,
  LiFirstLVL,
  ListContainer,
  ListItem,
} from "./MenuHeaderStyles";

import { ContainerList } from "./MenuHeaderStyles";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/MenuHeaderSlice/menuHeaderSlice";

import { categories } from "../../Products/Categories";
import categoriesProducts from "../../Utils/MenuList/MenuArrays";
import { selectCategories } from "../../redux/CategoriesSlice/CategoriesSlice";

export const MenuHeader = () => {
  const dispatch = useDispatch();

  const { isOpen, menuSelected } = useSelector(
    (state) => state.menuHeaderSlice
  );

  const handleMenuHeader = (e) => {
    dispatch(toggleMenu(e.target.innerText));
  };
  const handleClickSelectCategory = (e) => {
    if (e.target.innerText.length > 40) {
      return dispatch(selectCategories(e.target.firstChild.innerText));
    }
    return dispatch(selectCategories(e.target.innerText));
  };
  return (
    <ContainerMenu>
      <ContainerList>
        {categories.map((category) => {
          return (
            <LiFirstLVL
              onMouseEnter={(e) => handleMenuHeader(e)}
              onMouseLeave={(e) => handleMenuHeader(e)}
              key={category}
              onClick={(e) => handleClickSelectCategory(e)}
            >
              <NavLink className="first_nav_link" to="/shop">
                {category}
              </NavLink>
              {isOpen && menuSelected === category && (
                <ListContainer>
                  {Object.entries(categoriesProducts).map(
                    ([nombre, muebles]) => {
                      if (nombre.toLowerCase() === category.toLowerCase()) {
                        return muebles.map((muebleSelected) => (
                          <NavLink
                            key={muebleSelected}
                            className="navlink"
                            to="/shop"
                          >
                            <ListItem>{muebleSelected}</ListItem>
                          </NavLink>
                        ));
                      }
                    }
                  )}
                </ListContainer>
              )}
            </LiFirstLVL>
          );
        })}
      </ContainerList>
    </ContainerMenu>
  );
};
