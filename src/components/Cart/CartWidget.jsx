import React  from "react";
import { Stack, Badge, useDisclosure,IconButton } from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import CartDrawer from "./CartDrawer";

export default function CartWidget(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"-20px"}>
      <IconButton icon={<BsCart />}  onClick={onOpen} variant="unstyled"  fontSize="20px" m={0}/>

      <Badge borderRadius={"50%"} px={1.5} colorScheme={"purple"} display={props.cant === 0 ? "none" : undefined}>
        {props.cant}
      </Badge>
      {isOpen && <CartDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} /> }
    </Stack>
  );
}
