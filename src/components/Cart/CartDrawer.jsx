import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";
import { useCartContext } from "../../context/CartContext";

export default function CartDrawer({ btnRef, isOpen, onClose }) {

  const { cartList, clearCartList } = useCartContext();

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
            {cartList.map(prod => <li key={prod.id_product}> {prod.name} - {prod.cantidad} - {prod.price} </li>)}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={clearCartList}>
              Limpiar carrito
            </Button>
            <Button colorScheme="blue">Finalizar compra</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
