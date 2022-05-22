import React from "react";
import { Icon, Stack, Badge, useDisclosure, Button } from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import CartDrawer from "./CartDrawer";

export default function CartWidget(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
      <Icon as={BsCart}  onClick={onOpen} />

      <Badge borderRadius={"50%"} px={1.5} colorScheme="purple" ml={"-1.5px"}>
        {props.cant}
      </Badge>
      <CartDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Stack>
  );
}
