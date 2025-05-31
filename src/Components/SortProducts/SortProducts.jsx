import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { openMenu, selectSort } from "../../redux/sortMenuShop/sortMenuSlice";
import { SubMenuContainer } from "./SortProductsStyles";
import { ButtonShop } from "../UI/Buttons/ButtonShop/ButtonShop";

export const SortProducts = () => {
  const { sortSelected, isOpen } = useSelector((state) => state.sortMenu);

  const dispatch = useDispatch();

  return (
    <ul>
      <ButtonShop onClick={() => dispatch(openMenu())}>
        <span>{sortSelected}</span>
      </ButtonShop>
      {isOpen ? (
        <SubMenuContainer>
          <li
            onClick={(e) => {
              dispatch(selectSort("Most Relevant"));
            }}
          >
            Most Relevant
          </li>
          <li
            onClick={(e) => {
              dispatch(selectSort(" Expensive"));
            }}
          >
            Expensive
          </li>
          <li
            onClick={(e) => {
              dispatch(selectSort("Cheap"));
            }}
          >
            Cheap
          </li>
        </SubMenuContainer>
      ) : null}
    </ul>
  );
};
