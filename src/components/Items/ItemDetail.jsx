import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Select,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import ItemCount from "./ItemCount";
import { BsFillCreditCardFill, BsCash } from "react-icons/bs";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

export default function ItemDetail({ prod }) {
  const precioEfectivo = Math.trunc(parseInt(prod.price) / 1.15);
  const cuotas = Math.trunc(parseInt(prod.price) / 3);
  const [talle, setTalle] = useState("medium");
  const { addToCart, cartList } = useCartContext();
  const toast = useToast()

  const ElegirTalle = (e) => {
    setTalle(e.target.value);
  };

  const onAdd = (cantidad, talle) => {
    const index = cartList.findIndex((producto) => producto.id === prod.id);
    if (index !== -1) {
      if (cantidad + cartList[index].cantidad > prod.stock) {
        alert("no se puede agregar mas items al carrito por falta de stock")
      } else {
        addToCart({ ...prod, cantidad, talle });
        toastAddToCart(cantidad)
      }
    } else {
      addToCart({ ...prod, cantidad, talle });
      toastAddToCart(cantidad)
    }
  };

  function toastAddToCart(contador) {
    return (
      toast({
        position: 'top-right',duration:'800',
        render: () => (
          <Box color='white' p={3} mt={"50px"} borderRadius = 'lg' bg='primaryDark' >
            <Text> {contador} {prod.name} agregados al carrito</Text>
          </Box>
        ),
      })
    )
  }

  return (
    <Container maxW={"5xl"} mt={10}>
      <SimpleGrid
        bg={useColorModeValue("gray.100", "gray.800")}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, md: 5 }}
        py={{ base: 18, md: 22 }}
        px={{ base: 2, md: 18 }}
      >
        <Flex justifyContent={"center"}>
          <Image
            alignSelf={"center"}
            minW={"300px"}
            rounded={"md"}
            alt={"product image"}
            src={prod.urlimg}
            fit={"cover"}
            align={"center"}
            w={{ base: "300px", md: "500px", lg: "500px" }}
            h={{ base: "300px", md: "450px", lg: "450px" }}
          />
        </Flex>

        <Stack spacing={{ base: 2, md: 5 }} id="texto">
          <Stack justifyContent={"center"}>
            <Heading
              lineHeight={1}
              fontWeight={600}
              fontSize={{ base: "2xl", md: "3xl" }}
            >
              {prod.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={"bold"}
              fontSize={{ base: "xl", md: "2xl" }}
            >
              ${prod.price}
            </Text>
            <Stack direction={"row"} alignItems={"center"}>
              <Icon
                color={useColorModeValue("primaryDark", "primary")}
                as={BsCash}
                mt={{ base: "-25px", sm: "0" }}
              />
              <Text>
                ${precioEfectivo} Abonando en efectivo o transferencia bancaria
              </Text>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Icon
                color={useColorModeValue("primaryDark", "primary")}
                as={BsFillCreditCardFill}
              />
              <Text> 3 cuotas sin interés de ${cuotas} </Text>
            </Stack>
          </Stack>

          <Stack spacing={{ base: 5, sm: 8 }} direction={"column"}>
            <VStack spacing={{ base: 4, sm: 6 }} align="left">
              <Text
                color={useColorModeValue("secondaryDark", "secondaryLight")}
                fontSize={{ base: "md", sm: "md", lg: "lg" }}
                fontWeight={"300"}
              >
                {prod.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("primaryDark", "primary")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Medida
              </Text>

              <Select placeholder="Elegí tu talle" onChange={ElegirTalle}>
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
              </Select>
            </Box>
          </Stack>

          <ItemCount
            stock={prod.stock}
            initial={0}
            onAdd={onAdd}
            talle={talle}
          />

          <Stack direction="row" alignItems="center">
            <MdLocalShipping />
            <Text>2-3 Dias hábiles para envíos</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
