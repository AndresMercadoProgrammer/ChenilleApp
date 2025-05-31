import React from "react";
import { CardCartItem, ContainerButtons, ImgContainer } from "./CartStyles";
import { TiDelete } from "react-icons/ti";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import {
  addQuantity,
  removeProduct,
  subtractQuantity,
} from "../../redux/CartSlice/CartSlice";

export const CartCardList = ({ producto }) => {
  const dispatch = useDispatch();

  const { name, img, price_normal, description, quantity, id } = producto;
  return (
    <CardCartItem>
      <ImgContainer>
        <img src={img} alt={description} />
      </ImgContainer>
      <div className="container_data">
        <h3>{name}</h3>
        <p className="price">${price_normal}</p>
      </div>
      <ContainerButtons>
        <motion.button
          onClick={(e) => {
            dispatch(subtractQuantity(id));
          }}
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <RiSubtractLine className="subtract" />
        </motion.button>
        <p className="quantity">{quantity}</p>
        <motion.button whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
          <IoIosAdd
            onClick={(e) => {
              dispatch(addQuantity(id));
            }}
            className="add"
          />
        </motion.button>
        <motion.button whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
          <TiDelete
            className="delete"
            onClick={(e) => {
              return dispatch(removeProduct(id));
            }}
          />
        </motion.button>
      </ContainerButtons>
    </CardCartItem>
  );
};
