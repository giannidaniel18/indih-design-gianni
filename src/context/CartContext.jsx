import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  // aca van los valores  y funciones globales
  const [cartList, setcartList] = useState([]);
  const [cartBadge, setCartBadge] = useState(0);

  const addToCart = (item) => {
    const index = cartList.findIndex(
      (prod) => prod.id_product === item.id_product
    );
    if (index !== -1) {
      const newCartList = [...cartList];
      newCartList[index].cantidad += item.cantidad;
      setcartList(newCartList);
      
    } else {
      setcartList([...cartList, item]);
      
    }

    setCartBadge(cartBadge + item.cantidad)
  };

  const clearCartList = () => {
      setcartList([])
      setCartBadge(0)
  }

  

  console.log("aca esta fuera de la funcion", cartBadge)

  return (
    <CartContext.Provider value={{ cartList, addToCart, cartBadge , clearCartList}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
