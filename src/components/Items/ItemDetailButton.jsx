import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ItemDetailButton({ id }) {
  return (
    <>
      <Link to={`/producto/${id}`}>
        <Button bg="primary" variant="solid" w={"100%"} mt={3} _hover={{}}>
          Detalle
        </Button>
      </Link>
    </>
  );
}
