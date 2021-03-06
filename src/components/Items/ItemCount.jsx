import { useState } from "react";
import { Stack,IconButton,Button,Icon,useColorModeValue,Text } from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function ItemCount({ stock, initial, onAdd, talle }) {
  const addToCartColors = useColorModeValue("primaryDark", "primary");
  const [contador, setContador] = useState(initial);

  const sumarContador = () => {
    if (stock > 0) {
      if (contador == stock) {
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
    onAdd(contador, talle);
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack
        borderRadius={10}
        direction={"row"}
        alignItems={"center"}
        border={"groove 1px"}
        borderColor={"primary"}
      >
        <IconButton
          border={0}
          variant="outline"
          borderColor={addToCartColors}
          color={addToCartColors}
          aria-label="Send email"
          icon={<MinusIcon />}
          _active={""}
          _focus={""}
          _hover={""}
          onClick={restarContador}
        />

        <Text fontSize={23}>{contador}</Text>

        <IconButton
          border={0}
          variant="outline"
          borderColor={addToCartColors}
          color={addToCartColors}
          aria-label="Send email"
          icon={<AddIcon />}
          _active={""}
          _focus={""}
          _hover={""}
          onClick={sumarContador}
        />
      </Stack>
      <Stack direction={"row"} justify={"center"}>
        <Button
          isDisabled={contador == 0 ? true : false}
          borderRadius={60}
          bg="primary"
          variant="solid"
          w={{ base: "100%", lg: "300px" }}
          onClick={addToCart}
        >
          {stock == 0 ? (
            "Sin Stock"
          ) : (
            <>
              Agregar al carrito
              <Icon ml={1} as={BsCart} />
            </>
          )}
        </Button>
      </Stack>
    </Stack>
  );
}
