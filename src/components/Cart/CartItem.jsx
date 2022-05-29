import React from "react";
import {
  Box,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useCartContext } from "../../context/CartContext";


export default function CartItem({ prod }) {
  const addToCartColors = useColorModeValue("primaryDark", "primary");
  const { deleteFromCart, updateCartItem } = useCartContext();

  const sumarContador = () => {
    if (prod.cantidad === prod.stock) {
      alert("no se puede agregar mas items al carrito por falta de stock");
     
    } else {
      const cartItemToUpdate = { ...prod };
      cartItemToUpdate.cantidad++;
      updateCartItem(cartItemToUpdate);
    }
  };
  const restarContador = () => {
    if (prod.cantidad === 1) {
    } else {
      const cartItemToUpdate = { ...prod };
      cartItemToUpdate.cantidad--;
      updateCartItem(cartItemToUpdate);
    }
  };

  const delteItem = () => {
    deleteFromCart(prod.id);
  };

  return (
    <Stack
      direction={"row"}
      border={"1px"}
      borderColor={useColorModeValue("gray.400","gray.400")}
      p={2}
      spacing={2}
      rounded={"lg"}
    >
      <Stack>
        <Image rounded={"lg"} height={100} width={100} src={prod.urlimg} />
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"} width={"full"}>
        <Stack direction={"column"} justifyContent={"space-between"}>
          <Box fontSize="20px">{prod.name}</Box>
          <Stack
            width={"max-content"}
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
              _active={useColorModeValue("none", "none")}
              _focus={useColorModeValue("none", "none")}
              _hover={useColorModeValue("none", "none")}
              onClick={restarContador}
            />

            <Text fontSize={23}>{prod.cantidad}</Text>

            <IconButton
              border={0}
              variant="outline"
              borderColor={addToCartColors}
              color={addToCartColors}
              aria-label="Send email"
              icon={<AddIcon />}
              _active={useColorModeValue("none", "none")}
              _focus={useColorModeValue("none", "none")}
              _hover={useColorModeValue("none", "none")}
              onClick={sumarContador}
            />
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          alignItems={"flex-end"}
          justifyContent={"inherit"}
        >
          <IconButton
            variant="unstyled"
            color="red.300"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<BsTrash />}
            onClick={delteItem}
          />
          <Box> Precio total : ${prod.price * prod.cantidad}</Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
