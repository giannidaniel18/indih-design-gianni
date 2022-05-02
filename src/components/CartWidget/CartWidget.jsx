import React from "react";
import { Icon, Center, Flex } from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";

export default function CartWidget() {
  return (
    <Flex >
      <Center w="50px">
        <Icon as={BsCart} />
      </Center>
    </Flex>
  );
}
