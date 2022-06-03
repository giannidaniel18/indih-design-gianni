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
  Heading,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { BsCart } from "react-icons/bs";

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
          <DrawerHeader> <Heading >Carrito <Icon as={BsCart} boxSize={6} /></Heading> </DrawerHeader>

          <DrawerBody>
            <Stack justifyContent={"space-between"}>
              {cartList.map((prod) => (
                <CartItem key={prod.id} prod={prod} />
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter
            boxShadow="dark-lg"
            borderLeftRadius="2xl"
            borderTopRadius="2xl"
            bgGradient={useColorModeValue(
              "linear(to-b, gray.200, gray.300)",
              "linear(to-b, gray.600, gray.700)"
            )}
          >
            <Stack direction={{base : "column" ,sm:"row"}} width={"100%"} justifyContent={"space-between"}>
              <Stack alignSelf={{base: "center", sm: "start"}}>
                <Stat direction={{base : "column" ,sm:"row"}} >
                  <StatLabel fontSize={"xs"}>Total</StatLabel>
                  <StatNumber fontSize={{ base: "xl", md: "3xl" }}>
                    $ {cartTotalPrice}
                  </StatNumber>
                </Stat>
              </Stack>
              <Stack direction={"row"} alignSelf={"end"}>
                <Button variant="outline" mr={3} onClick={clearCartList}>
                  Limpiar carrito
                </Button>
                <Link to={"/cart"}>
                  <Button onClick={onClose} bg="primary">
                    Finalizar compra
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
