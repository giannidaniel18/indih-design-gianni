import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const inputbordercolor = useColorModeValue("gray.400", undefined);
  const { cartList, getTotalPrice } = useCartContext();
  const cartTotalPrice = getTotalPrice();
  const listado = cartList.map((prod) => (
    <CartItem key={prod.id} prod={prod} />
  ));

  return <>{cartList.length === 0 ? <EmptyCart /> : <FullCartLayout />}</>;

  function FullCartLayout() {
    return (
      <Container maxW={"5xl"} mt={10}>
        <Text textAlign={"center"} fontSize={"5xl"} m={3}>
          {" "}
          Finalizar compra{" "}
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(10, 3fr)" }}
          gap={6}
        >
          <GridItem colSpan={6}>
            <ContactForm />
            <PersonalInfoForm />
          </GridItem>
          <GridItem colSpan={{ base: 6, lg: 4 }}>
            <Stack position={{ base: "inherit", lg: "fixed" }}>
              <Stack>{listado}</Stack>
              <Stack alignItems={"end"}>
                <Text> Precio total ${cartTotalPrice} </Text>
                <Link to={"/productos"}>
                  <Button bg={"primaryDark"}>Seguir comprando</Button>
                </Link>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    );
  }
  function ContactForm() {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => setInput(e.target.value);

    const isError = input === "";

    return (
      <FormControl isInvalid={isError}>
        <FormLabel fontSize={"3xl"} htmlFor="email">
          Datos de contacto
        </FormLabel>
        <Input
          id="email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Toda la información de la compra te llegará a este correo
            electrónico
          </FormHelperText>
        ) : (
          <FormErrorMessage>
            El correo electrónico es requerido
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }

  function PersonalInfoForm() {
    return (
      <FormControl>
        <FormLabel fontSize={"3xl"} htmlFor="name">
          Datos del destinatario
        </FormLabel>
        <Input
          borderColor={inputbordercolor}
          id="name"
          placeholder={"Nombre"}
          type="text"
          mt={2}
        />
        <Input borderColor={inputbordercolor} id="surname" placeholder={"Apellido"} type="text" mt={2} />
        <Input borderColor={inputbordercolor} id="tel" placeholder={"Telefono"} type="tel" mt={2} />
      </FormControl>
    );
  }

  function EmptyCart() {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, primary, primaryDark)"
          backgroundClip="text"
        >
          Ups! Tu carrito esta vacío
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Sin productos
        </Text>
        <Text color={"gray.500"} mb={6}>
          No te preocupes haz click abajo para recorrer nuestra tienda
        </Text>

        <Link to={"/productos"}>
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, primary, primaryDark)"
            color="white"
            variant="solid"
          >
            Shopping
          </Button>
        </Link>
      </Box>
    );
  }
}
