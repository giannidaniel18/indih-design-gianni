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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito de compra</DrawerHeader>

          <DrawerBody>
            <Stack justifyContent={"space-between"}>
              {cartList.map((prod) => (
                <CartItem key={prod.id} prod={prod} />
              ))}
              <Box alignSelf={"end"}>
                <Stat>
                  <StatLabel>Precio total del carrito</StatLabel>
                  <StatNumber>$ {cartTotalPrice}</StatNumber>
                </Stat>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={clearCartList}>
              Limpiar carrito
            </Button>
            <Link to={"/cart"}>
              <Button onClick={onClose} bg="primary">Finalizar compra</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
