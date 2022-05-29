import { Box } from "@chakra-ui/react";
import React from "react";
import ItemDetail from "../Items/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetailSkeleton from "../OtherComponents/Skeletons/ItemDetailSkeleton";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    if(id){
      const dbQuery = doc(db, "productos", id);
      getDoc(dbQuery)
        .then(prod => setProducto({ id: prod.id, ...prod.data()}))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    } else{
      setProducto({
        id_product: "N/A",
        category: "N/A",
        name: "N/A",
        description: "N/A",
        price: "N/A",
        img: "N/A",
        url: "N/A",
        stock: "N/A",
      },)
    }
  }, [id]);

  return (
    <Box>
      {loading ? (
        <ItemDetailSkeleton />
      ) : (
        <ItemDetail key={producto.id} prod={producto} />
      )}
    </Box>
  );
}
