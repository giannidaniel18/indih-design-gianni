import { useState } from "react";
import {
  Stack,
  IconButton,
  Button,
  Icon,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function ItemCount({ stock, initial, onAdd }) {
  const addToCartColors = useColorModeValue("primaryDark", "primary");
  const [contador, setContador] = useState(initial);

  const sumarContador = () => {
    if (stock > 0) {
      if ((contador == stock)) {
        return contador;
      } else {
        setContador(contador + 1);
      }
    } else {
      return;
    }
  };
  const restarContador = () => {
    contador == 0 ? "" : setContador(contador - 1);
  };

  const addToCart = () => {
      onAdd(contador)
  }


  return (
    <>
      <Stack mt={5} direction={"row"} justifyContent={"space-between"}>
        <IconButton
          variant="outline"
          borderColor={addToCartColors}
          color={addToCartColors}
          aria-label="Send email"
          icon={<MinusIcon />}
          onClick={restarContador}
        />

        <Text fontWeight={"bold"}>{contador}</Text>

        <IconButton
          variant="outline"
          borderColor={addToCartColors}
          color={addToCartColors}
          aria-label="Send email"
          icon={<AddIcon />}
          onClick={sumarContador}
        />
      </Stack>
      <Stack direction={"row"} justify={"center"}>
        <Button disabled= {contador == 0 ? true : false} bg="primary" variant="solid" w={"100%"} mt={3} onClick={addToCart}>
          Add to cart
          <Icon ml={1} as={BsCart} />
        </Button>
      </Stack>
    </>
  );
}
