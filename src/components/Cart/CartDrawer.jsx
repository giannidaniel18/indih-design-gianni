import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Text,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

export default function CartDrawer({ btnRef, isOpen, onClose }) {
  const { cartList, clearCartList, getTotalPrice } = useCartContext();

  const cartTotalPrice = getTotalPrice();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent borderLeftRadius="2xl">
          <DrawerCloseButton />
          <DrawerHeader>Carrito de compra</DrawerHeader>

          <DrawerBody>
            <Stack justifyContent={"space-between"}>
              {cartList.map((prod) => (
                <CartItem key={prod.id} prod={prod} />
              ))}
              <Box alignSelf={"end"}></Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter boxShadow="dark-lg"borderLeftRadius="2xl" borderTopRadius="2xl" bgGradient={useColorModeValue("linear(to-b, gray.50, gray.300)", "linear(to-b, gray.600, gray.700)")}>
            <Stat>
              <StatLabel fontSize={"xs"}>Total</StatLabel>
              <StatNumber fontSize={"3xl"} >$ {cartTotalPrice}</StatNumber>
            </Stat>
            <Stack direction={"row"}>
              <Button variant="outline" mr={3} onClick={clearCartList}>
                Limpiar carrito
              </Button>
              <Link to={"/cart"}>
                <Button onClick={onClose} bg="primary">
                  Finalizar compra
                </Button>
              </Link>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
