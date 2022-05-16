import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ItemDetailButton({id}) {

  return (
    <Button bg="primary" variant="solid" w={"100%"} mt={3} _hover={"none"}>
      <Link to={`/producto/${id}`}>Detalle</Link>    
    </Button>
  );
}
