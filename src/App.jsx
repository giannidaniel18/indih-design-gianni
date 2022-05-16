import { Box } from "@chakra-ui/react";
import ItemListContainer from "./components/ContainerComponents/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetail from "./components/Items/ItemDetail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ContainerComponents/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Box maxWidth={"90%"} m="auto">
        <Routes>
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
        </Routes>

        {/* en caso de ingresar a una ruta que no este definida antes lo dirige a /home */}
      </Box>
      
    </BrowserRouter>
  );
}

export default App;
