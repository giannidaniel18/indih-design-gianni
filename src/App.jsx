import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ItemListContainer from "./components/ContainerComponents/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  

  return (
    <Box maxWidth={'90%'} m="auto">
      <NavBar />
      <ItemListContainer/>
    </Box>
  );
}

export default App;
