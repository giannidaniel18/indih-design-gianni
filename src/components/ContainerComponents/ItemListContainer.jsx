import { Wrap, WrapItem } from "@chakra-ui/react";
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
import NotFound from "../OtherComponents/NotFound/NotFound";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const queryCollection = collection(db, "productos");
    const queryCollectionFilter = categoria
      ? query(queryCollection, where("category", "==", categoria))
      : queryCollection;
    getDocs(queryCollectionFilter)
      .then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoria]);

  return (
    <Wrap spacing="20px" maxW={"80%"} m="auto" justify={"center"}>
      {loading ? (
        <>
          <WrapItem>
            <ItemSkeleton />
          </WrapItem>
          <WrapItem>
            <ItemSkeleton />
          </WrapItem>
          <WrapItem>
            <ItemSkeleton />
          </WrapItem>
          <WrapItem>
            <ItemSkeleton />
          </WrapItem>
          <WrapItem>
            <ItemSkeleton />
          </WrapItem>
        </>
      ) : products.length === 0 ? (
        <WrapItem>
          <NotFound
            title={`Ups!! En este momento no tenemos stock de ${categoria}`}
          />
        </WrapItem>
      ) : (
        products.map((prod) => (
          <WrapItem key={prod.id}>
            <Item prod={prod} />
          </WrapItem>
        ))
      )}
    </Wrap>
  );
}

export default ItemListContainer;
