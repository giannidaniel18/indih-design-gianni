import { useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ContainerComponents/ItemListContainer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
     <NavBar/>
      <ItemListContainer/>    
        </>
  );
}

export default App;
