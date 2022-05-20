import {createContext, useContext, useState} from 'react'

const CartContext = createContext([]) 
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    // aca van los valores  y funciones globales
    const [cartList, setcartList] = useState([])

    const addToCart = (item) => {
        setcartList([...cartList,item])
        console.log(cartList)
    }

    return(
        <CartContext.Provider value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


