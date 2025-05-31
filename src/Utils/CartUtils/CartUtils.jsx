import { useSelector } from "react-redux";
import { SHIPPING_COST } from "./ShippingCost";

export const addToCartItem = (prevCartItem, itemToAdd) => {
  const productInCart = prevCartItem.find((product) => {
    return product.id === itemToAdd.id;
  });

  if (productInCart) {
    return prevCartItem.map((item) => {
      return item.id === productInCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [
    ...prevCartItem,
    {
      ...itemToAdd,
      quantity: 1,
    },
  ];
};

export const addQuantityItem = (cartItems, idProduct) => {
  return cartItems.map((product) => {
    if (product.id == idProduct) {
      return { ...product, quantity: product.quantity + 1 };
    }
    return product;
  });
};

export const subtractQuantityItem = (cartItems, idProduct) => {
  return cartItems.map((product) => {
    if (product.id == idProduct && product.quantity >= 2) {
      return { ...product, quantity: product.quantity - 1 };
    }
    return product;
  });
};

export const removeItemCart = (cartItems, idProduct) => {
  return cartItems.filter((item) => item.id !== idProduct);
};

export const totalCostProducts = () => {
  const cart = useSelector((state) => state.cartSlice.cartItems);

  if (cart.length === 0) {
    return "0";
  }
  const reducerTotal = cart.reduce((acc, currentValue) => {
    const priceQuantity = currentValue.price_normal * currentValue.quantity;
    return acc + priceQuantity;
  }, 0);
  return reducerTotal;
};

export const modalCart = () => {
  const cart = useSelector((state) => state.cartSlice.cartItems);

  if (cart.length === 0) {
    return "0";
  }
  const reducerTotal = cart.reduce((acc, currentValue) => {
    console.log(acc + currentValue.quantity);
    return (acc += currentValue.quantity);
  }, 0);
  return reducerTotal;
};

export const totalMount = () => {
  const cart = useSelector((state) => state.cartSlice.cartItems);

  if (cart.length === 0) {
    return "0";
  }
  const reducerTotal = cart.reduce((acc, currentValue) => {
    const priceQuantity = currentValue.price_normal * currentValue.quantity;
    return acc + priceQuantity;
  }, 0);
  return reducerTotal + SHIPPING_COST;
};
