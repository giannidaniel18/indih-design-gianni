import { Box } from "@chakra-ui/react";
import React from "react";
import ItemDetail from "../Items/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetailSkeleton from "../OtherComponents/Skeletons/ItemDetailSkeleton";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import NotFound from "../OtherComponents/NotFound/NotFound";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "productos", id);
    getDoc(dbQuery)
      .then((prod) => setProduct({ id: prod.id, ...prod.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);


  return (
    <Box>
      {loading ? (
        <ItemDetailSkeleton />
      ) : Object.keys(product).length === 1 ? (
        <NotFound
          title={"Ups! No encontramos el producto que estas buscando"}
          description={"No te preocupes haz click abajo para recorrer nuestra tienda"}
        />
      ) : (
        <ItemDetail key={product.id} prod={product} />
      )}
    </Box>
  );
}
