import { Box } from "@chakra-ui/react";
import ItemListContainer from "./components/ContainerComponents/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ContainerComponents/ItemDetailContainer";
import HomeContainer from "./components/ContainerComponents/HomeContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Box maxWidth={"100%"} m="auto">
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/home" element={<HomeContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          {/* en caso de ingresar a una ruta que no este definida antes lo dirige a /home */}
        </Box>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
