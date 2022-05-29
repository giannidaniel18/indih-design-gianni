import { Grid, GridItem } from "@chakra-ui/react";
import Item from "../Items/Item";
import { useEffect, useState } from "react";
import ItemSkeleton from "../OtherComponents/Skeletons/ItemSkeleton";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();


  //TRAER LOS PRODUCTOS FILTRANDO POR CATEGORIA
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");
    if (categoria) {
      setLoading(true);
      const queryCollectionFilter = query(
        queryCollection,
        where("category", "==", categoria)
      );
      getDocs(queryCollectionFilter)
        .then((resp) =>setProductos(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((resp) =>
          setProductos(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoria]);

  

  return (
    <Grid
      mt={5}
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 5fr)",
        xl: "repeat(4, 3fr)",
      }}
      gap={2}
    >
      {loading ? (
        <>
          <GridItem>
            <ItemSkeleton />
          </GridItem>
          <GridItem>
            <ItemSkeleton />
          </GridItem>
          <GridItem>
            <ItemSkeleton />
          </GridItem>
          <GridItem>
            <ItemSkeleton />
          </GridItem>
        </>
      ) : (
        productos.map((prod) => (
          <GridItem key={prod.id} w="100%">
            <Item prod={prod} />
          </GridItem>
        ))
      )}
    </Grid>
  );
}
export default ItemListContainer;
