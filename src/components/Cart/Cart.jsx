import React, { useState } from "react";
import { Link as reactLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getFirestore, collection, addDoc } from "firebase/firestore";
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
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import NotFound from "../OtherComponents/NotFound/NotFound";
import SuccessResult from "../OtherComponents/results/SuccesResult";

export default function Cart() {
  // BORDER INPUT EN COLORMODE
  const inputbordercolor = useColorModeValue("gray.400", undefined);

  //USING CART CONTEXT
  const { cartList, getTotalPrice, getCartQty, clearCartList } =useCartContext();
  const cartTotalPrice = getTotalPrice();
  const productList = cartList.map((prod) => (
    <CartItem key={prod.id} prod={prod} />
  ));
  // REACT HOOK FORM
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => CreateOrder(data);
  const [orderId, setorderId] = useState(null);
  const [shippingmethod, setshippingmethod] = useState("env_01");

  const toggleShippingMethod = (e) => {
    e.preventDefault;
    setshippingmethod(e);
  };

  return (
    <>
      {orderId === null ? (
        cartList.length === 0 ? (
          <NotFound
            title={"Ups! Tu carrito esta vacío"}
            subTitle={"Sin productos"}
            description={
              "No te preocupes haz click abajo para recorrer nuestra tienda"
            }
          />
        ) : (
          <FullCartLayout />
        )
      ) : (
        <SuccessResult
          title={"Felicidades tu orden ha sido creada"}
          text={"Hemos creado la orden de compra con el codigo : " + orderId}
          buttonTo={"order/" + orderId}
          buttonText={"Ver orden >  "}
        />
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
              {productList}
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
            </Stack>
          </VStack>
        </Stack>
      </Stack>
    );
  }

  function PersonalInfoForm() {
    return (
      <Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired mb={2} mr={5}>
            <FormLabel htmlFor="email" fontSize={"2xl"}>
              Dirección de correo electrónico
            </FormLabel>
            <Input
              borderColor={inputbordercolor}
              id="email"
              type="email"
              placeholder="example@exampledom.com.ar"
              {...register("email", { required: true })}
            />
          </FormControl>
          <FormControl isRequired mb={2} mr={5}>
            <FormLabel fontSize={"2xl"}>Datos de contacto</FormLabel>
            <Input
              borderColor={inputbordercolor}
              id="clientName"
              type="text"
              placeholder="Nombre"
              {...register("clientName", { required: true })}
            />
          </FormControl>
          <FormControl isRequired mb={2} mr={5}>
            <Input
              borderColor={inputbordercolor}
              id="clientSurName"
              type="text"
              placeholder="Apellido"
              {...register("clientSurName", { required: true })}
            />
          </FormControl>
          <FormControl isRequired mb={2} mr={5}>
            <Input
              borderColor={inputbordercolor}
              id="clientPhone"
              type="number"
              placeholder="+54 9 11XXXXXXX"
              {...register("clientPhone", { required: true })}
            />
          </FormControl>
          <FormControl isRequired mb={2} mr={5}>
            <FormLabel fontSize={"2xl"}>
              Seleccione el método de envío <Icon pt={2} as={FaShippingFast} />{" "}
            </FormLabel>
            <RadioGroup
              defaultValue="env_01"
              onChange={toggleShippingMethod}
              value={shippingmethod}
            >
              <HStack spacing="24px">
                <Radio value="env_01" {...register("deliveryMethod")}>
                  {"Envio a domicilio "}
                </Radio>
                <Radio value="env_02" {...register("deliveryMethod")}>
                  {" Retiro en sucursal"}
                </Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>
              En caso de envio a domicilio las entregas se realizaran por correo
              argentino
            </FormHelperText>
          </FormControl>
          {shippingmethod === "env_01" ? (
            <FormControl isRequired mb={2} mr={5}>
              <FormLabel htmlFor="clientDirection" fontSize={"2xl"}>
                Direccion de entrega
              </FormLabel>
              <Input
                borderColor={inputbordercolor}
                id="clientDirection"
                type="text"
                placeholder="calle falsa 123"
                {...register("clientDirection", { required: true })}
              />
            </FormControl>
          ) : (
            ""
          )}

          <Box textAlign={"end"}>
            <Button _hover={""} bg={"primaryDark"} type="submit">
              Ir a pagar <Icon as={BsCreditCard} ml={1} />
            </Button>
          </Box>
        </form>
      </Stack>
    );
  }

  async function CreateOrder(data) {
    let order = {};
    const fecha = Date.now();

    (order.buyer = {
      data,
      buyDate: new Date(fecha).toLocaleString(),
    }),
      (order.totalItems = getCartQty());
    order.totalPrice = cartTotalPrice;
    order.items = cartList.map(
      ({ id, name, price, talle, cantidad, urlimg }) => {
        return { id, name, price, talle, cantidad, urlimg };
      }
    );

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    const createDoc = await addDoc(queryCollection, order);
    setorderId(createDoc.id);
    clearCartList();
  }
}
