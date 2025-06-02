import React from "react";
import {
  CartStyled,
  CheckOutContainer,
  ProductsContainer,
  EffectBlur,
  CleanCartButton,
  CloseButtonStyled,
} from "./CartStyles";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/CartSlice/CartSlice";
import { CartCardList } from "./CartCardList";
import { FaRegTrashAlt } from "react-icons/fa";
import { totalCostProducts, totalMount } from "../../Utils/CartUtils/CartUtils";
import { SHIPPING_COST } from "../../Utils/CartUtils/ShippingCost";
import { SlClose } from "react-icons/sl";
import { toggleCart } from "../../redux/ToggleCartSlice/ToggleCartSlice";

export const Cart = () => {
  const { cartItems } = useSelector((state) => {
    return state.cartSlice;
  });

  const { active } = useSelector((state) => state.toggleCart);
  console.log(active);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    return dispatch(clearCart());
  };

  return (
    <>
      {active && <EffectBlur onClick={() => dispatch(toggleCart())} />}
      <CartStyled $active={active}>
        <CloseButtonStyled
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          onClick={() => dispatch(toggleCart())}
        >
          <SlClose className="XButton" />
        </CloseButtonStyled>
        <div className="titleContainer">
          <h2 className="title">Tus Productos</h2>
          <CleanCartButton
            initial={{ scale: 1 }}
            whileTap={{ scale: 1.1 }}
            onClick={handleClearCart}
          >
            <FaRegTrashAlt />
          </CleanCartButton>
        </div>

        <ProductsContainer>
          {cartItems.length ? (
            cartItems.map((producto) => {
              return <CartCardList key={producto.id} producto={producto} />;
            })
          ) : (
            <div className="noProducts">"NO HAY PRODUCTOS EN EL CARRITO"</div>
          )}
        </ProductsContainer>
        <CheckOutContainer>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>$ {totalCostProducts()}</p>
          </div>
          <div className="shippingCost">
            <p>Envio</p>
            {cartItems.length ? <p>$ {SHIPPING_COST}</p> : <p>$ 0</p>}
          </div>

          <span className="line"></span>
          <div className="total">
            <p>TOTAL</p>

            <p>$ {totalMount()}</p>
          </div>
        </CheckOutContainer>
      </CartStyled>
    </>
  );
};
