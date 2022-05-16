import { Box } from "@chakra-ui/react";
import React from "react";
import ItemDetail from "../Items/ItemDetail";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch()
        .then((respuesta) =>
          setProducto(respuesta.find((prod) => prod.id_product === id))
        )
        .catch((err) => console.log(err))
        .finally(() => console.log("finalizado"));
    } else {
      getFetch()
        .then((respuesta) => setProducto(respuesta))
        .catch((err) => console.log(err))
        .finally(() => console.log("finalizado"));
    }
  }, [id]);

  return (
    <Box>
      <ItemDetail key={producto.id_product} prod={producto} />
    </Box>
  );
}
