import React, { useState } from "react";
import {
  Box,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiDelete } from "react-icons/fi";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useCartContext } from "../../context/CartContext";
import SimpleAlertDialog from "../OtherComponents/alert/SimpleAlertDialog";

export default function CartItem({ prod }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  const addToCartColors = useColorModeValue("primaryDark", "primary");
  const { deleteFromCart, updateCartItem } = useCartContext();

  const sumarContador = () => {
    if (prod.cantidad === prod.stock) {
      onOpen(); // alert("no se puede agregar mas items al carrito por falta de stock")
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
    animateOpacity
      direction={"row"}
      border={"1x"}
      borderColor={useColorModeValue("gray.400", "gray.400")}
      p={2}
      spacing={2}
      rounded={"lg"}
      boxShadow={useColorModeValue("xl", "2xl")}
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
              _active={""}
              _focus={""}
              _hover={""}
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
              _active={""}
              _focus={""}
              _hover={""}
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
            color={useColorModeValue("gray.700", undefined)}
            aria-label="Call Sage"
            fontSize="2xl"
            icon={<FiDelete />}
            onClick={delteItem}
            _hover={{
              color: "red.300",
            }}
          />
          <Box> Precio total : ${prod.price * prod.cantidad}</Box>
          {isOpen && (
            <SimpleAlertDialog
              isOpen={isOpen}
              onClose={onClose}
              title={"Stock Insuficiente"}
              textbody={
                "Superaste el limite de Stock para el producto : " + prod.name
              }
            />
          )}
        </Stack>
      </Stack>
    </Stack>
   
  );
}
