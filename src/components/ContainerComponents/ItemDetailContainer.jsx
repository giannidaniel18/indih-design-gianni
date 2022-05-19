import { Box } from "@chakra-ui/react";
import React from "react";
import ItemDetail from "../Items/ItemDetail";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import { useEffect, useState } from "react";
import ItemDetailSkeleton from "../Skeletons/ItemDetailSkeleton";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getFetch()
        .then((respuesta) =>
          setProducto(respuesta.find((prod) => prod.id_product === id))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch()
        .then((respuesta) => setProducto(respuesta))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <Box>
      {loading ? (
        <ItemDetailSkeleton />
      ) : (
        <ItemDetail key={producto.id_product} prod={producto} />
      )}
    </Box>
  );
}
