import { Grid, GridItem } from "@chakra-ui/react";
import Item from "../Items/Item";
import { useEffect, useState } from "react";
import ItemSkeleton from "../Items/ItemSkeleton";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria) {
      setLoading(true)
      getFetch()
        .then(respuesta => setProductos(respuesta.filter((prods) => prods.category === categoria)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      
      getFetch()
        .then((respuesta) => setProductos(respuesta))
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
          <GridItem key={prod.id_product} w="100%" >
            <Item
              name={prod.name}
              category={prod.category}
              price={prod.price}
              img={prod.img}
              stock={prod.stock}
              id={prod.id_product}
            />
          </GridItem>
        ))
      )}
    </Grid>
  );
}
export default ItemListContainer;
