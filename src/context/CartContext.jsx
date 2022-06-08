import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setcartList] = useState([]);
  const addToCart = (item) => {
    const index = cartList.findIndex((prod) => prod.id === item.id);
    if (index !== -1) {
      const newCartList = [...cartList];
      newCartList[index].cantidad += item.cantidad;
      setcartList(newCartList);
    } else {
      setcartList([...cartList, item]);
    }
  };
  const deleteFromCart = (id) => {
    const newCartList = cartList.filter((producto) => producto.id !== id);
    setcartList(newCartList);
  };
  const clearCartList = () => {
    setcartList([]);
  };
  const getCartQty = () => {
    const sum = cartList.reduce((acumulator, object) => {
      return acumulator + object.cantidad;
    }, 0);
    return sum;
  };
  const updateCartItem = (item) => {
    const newCartList = [...cartList];
    const index = cartList.findIndex((producto) => producto.id === item.id);
    newCartList[index] = item;
    setcartList(newCartList);
  };
  const getTotalPrice = () => {
    const sum = cartList.reduce((acumulator, object) => {
      return acumulator + object.price * object.cantidad;
    }, 0);
    return sum;
  };
  
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCartList,
        deleteFromCart,
        getTotalPrice,
        getCartQty,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
