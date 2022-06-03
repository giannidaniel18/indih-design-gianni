import React from "react";
import { Link as reactLink } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Link,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import NotFound from "../OtherComponents/NotFound/NotFound";

export default function Cart() {
  const inputbordercolor = useColorModeValue("gray.400", undefined);
  const { cartList, getTotalPrice, getCartQty } = useCartContext();
  const cartTotalPrice = getTotalPrice();
  const listado = cartList.map((prod) => (
    <CartItem key={prod.id} prod={prod} />
  ));

  return (
    <>
      {cartList.length === 0 ? (
        <NotFound
          title={"Ups! Tu carrito esta vacío"}
          subTitle={"Sin productos"}
          description={"No te preocupes haz click abajo para recorrer nuestra tienda"}
        />
      ) : (
        <FullCartLayout />
      )}
    </>
  );

  function FullCartLayout() {
    return (
      <Stack maxW={"90%"} mt={10} alignItems="center" mx="auto">
        <Heading
          m={4}
          textAlign={"center"}
          fontSize={{ base: "4xl", md: "5xl" }}
        >
          Check Out
        </Heading>
        <Stack direction={{ base: "column", lg: "row" }} gap={10}>
          <VStack>
            <PersonalInfoForm />
          </VStack>
          <VStack>
            <Stack minWidth={{ base: 300, lg: 600 }} gap={10}>
              {listado}
              <Stack
                fontSize={35}
                fontWeight={"light"}
                direction={"row"}
                justifyContent={"space-between"}
                p={2}
              >
                <Text> Total </Text>
                <Text> ${cartTotalPrice}</Text>
              </Stack>
            </Stack>

            <Stack direction={"row"} alignSelf={"end"} color={"gray.50"}>
              <Box>
                <Link as={reactLink} to={"/productos"}>
                  <Button bg={"primaryDark"} _hover={""}>
                    Continuar comprando <Icon as={BiShoppingBag} ml={1} />
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link as={reactLink} to={"/cart"}>
                  <Button
                    _hover={""}
                    alignSelf={"auto"}
                    bg={"primaryDark"}
                    onClick={CreateOrder}
                  >
                    Ir a pagar <Icon as={BsCreditCard} ml={1} />
                  </Button>
                </Link>
              </Box>
            </Stack>
          </VStack>
        </Stack>
      </Stack>
    );
  }

  function PersonalInfoForm() {
    return (
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor="email" fontSize={"2xl"}>
            Dirección de correo electrónico
          </FormLabel>
          <Input id="email" type="email" borderColor={inputbordercolor} />
          <FormHelperText>Nunca compartiremos tu email</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={"2xl"} htmlFor="name">
            Datos del comprador/a
          </FormLabel>
          <Input
            borderColor={inputbordercolor}
            id="name"
            placeholder={"Nombre"}
            type="text"
            mt={2}
          />
          <Input
            borderColor={inputbordercolor}
            id="surname"
            placeholder={"Apellido"}
            type="text"
            mt={2}
          />
          <Input
            borderColor={inputbordercolor}
            id="tel"
            placeholder={"Telefono"}
            type="tel"
            mt={2}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="calle" fontSize={"2xl"}>
            Datos de envio
          </FormLabel>
          <Stack direction={"row"}>
            <Input
              id="calle"
              type="text"
              w={"70%"}
              placeholder="Calle"
              borderColor={inputbordercolor}
            />
            <Input
              id="altura"
              type="number"
              w={"30%"}
              placeholder="Altura"
              borderColor={inputbordercolor}
            />
          </Stack>
        </FormControl>
      </Stack>
    );
  }

  function CreateOrder() {
    let order = {};
    const fecha = Date.now();

    (order.buyer = {
      Nombre: "Daniel",
      phone: "1134551805",
      shippingMethod: "xxxxx",
      adress: "xxxx",
      fecha: new Date(fecha).toUTCString(),
    }),
      (order.totalItems = getCartQty());
    order.totalPrice = cartTotalPrice;
    order.items = cartList.map(({ id, name, price, talle, cantidad }) => {
      return { id, name, price, talle, cantidad };
    });

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(console.log("vaciar carrito"));
  }
}
