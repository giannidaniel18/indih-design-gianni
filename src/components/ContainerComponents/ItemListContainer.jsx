import { Stack, Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Item from "../Items/Item";
import { useEffect } from "react";

const PRODUCTOS = [
  {
    id_product: "01",
    category: "Anillos",
    name: "Anillo Azul",
    description: "Anillo Azul",
    price: "$100",
    img: "src/resources/img/Products/Pulseras/PulseraLimon.jpeg",
  },
  {
    id_product: "02",
    category: "Collares",
    name: "Collar Azul y blanco",
    description: "Collar Azul y blanco",
    price: "$150",
    img: "src/resources/img/Products/Collares/CollarAzulyBlanco.jpeg",
  },
  {
    id_product: "03",
    category: "Collares",
    name: "Collar Bostero",
    description: "Collar Bostero",
    price: "$150",
    img: "src/resources/img/Products/Collares/CollarBostero.jpeg",
  },
  {
    id_product: "04",
    category: "Pulseras",
    name: "Pulsera Frutilla",
    description: "Pulsera Frutilla",
    price: "$150",
    img: "src/resources/img/Products/Pulseras/PulseraFrutilla.jpeg",
  },
  {
    id_product: "05",
    category: "Pulseras",
    name: "Pulsera Limon",
    description: "Pulsera Limon",
    price: "$250",
    img: "src/resources/img/Products/Pulseras/PulseraLimon.jpeg",
  },
  {
    id_product: "06",
    category: "Pulseras",
    name: "Pulsera Pomelo",
    description: "Pulsera Pomelo",
    price: "$250",
    img: "src/resources/img/Products/Pulseras/PulseraPomelo.jpeg",
  },
  {
    id_product: "07",
    category: "Pulseras",
    name: "Pulsera Roja",
    description: "Pulsera Roja",
    price: "$250",
    img: "src/resources/img/Products/Pulseras/PulseraRoja.jpeg",
  },
];

useEffect;

function ItemListContainer() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={5}
    >
      {PRODUCTOS.map((prod) => (
        <GridItem w="100%">
          
          <Item
            key={prod.id_product}
            name={prod.name}
            category={prod.category}
            price={prod.price}
            img={prod.img}
          />
        </GridItem>
      ))}

    </Grid>

    // <Flex justifyContent={"center"}>
    //   <Stack spacing={5} direction={{ base: "column", md: "row" }}>
    //     <Box >
    //       <Item/>
    //     </Box>
    //
    //      <Box >
    //       <Item/>
    //     </Box>

    //   </Stack>
    // </Flex>
  );
}
export default ItemListContainer;
