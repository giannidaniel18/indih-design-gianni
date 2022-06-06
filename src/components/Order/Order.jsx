import {
  Box,
  Heading,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  useColorModeValue,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsPinMapFill,
} from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

export default function Order({ order }) {
  console.log(order);
  return (
    <Stack p={5} spacing={5}>
      <Heading fontSize={{ base: "xl", lg: "3xl" }} >
        {" "}
        Orden N° : {order.id}
      </Heading>
      <Divider w={"60%"} />

      <Text fontSize={{ base: "lg", lg: "xl" }}  >
        {"Informacion de la orden"}
      </Text>
      <Stack direction={{base : "column", md :"row"}}>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={BsFillPersonFill} color="primaryDark" />
            Comprador : {order.buyer.data.clientName}{" "}
            {order.buyer.data.clientSurName}
          </ListItem>
          <ListItem>
            <ListIcon as={BsFillTelephoneFill} color="primaryDark" />
            Teléfono de contacto : {order.buyer.data.clientPhone}
          </ListItem>
        </List>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={FaShippingFast} color="primaryDark" />
            Método de envío :{" "}
            {order.buyer.data.deliveryMethod === "env_01"
              ? "Envio a domicilio"
              : "Retiro en sucursal"}
          </ListItem>
          <ListItem>
            <ListIcon as={BsPinMapFill} color="primaryDark" />
            Dirección de entrega : {order.buyer.data.clientDirection === '' ? "Retiro en sucursal" : order.buyer.data.clientDirection }
          </ListItem>
        </List>
      </Stack>

      <TableContainer
        border="1px"
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={"lg"}
        width={{ base: "100%", lg: "75%", xl: "60%" }}
        p={3}
      >
        <Table size="sm">
        <TableCaption fontSize={"md"} m={0}>Detalle de la compra</TableCaption>
          <Thead>
            <Tr>
              <Th>Producto</Th>
              <Th>Nombre</Th>
              <Th isNumeric>cantidad</Th>
            </Tr>
          </Thead>
          <Tbody>
            {order.items.map((item) => (
              <Tr key={item.id}>
                <Td borderColor={useColorModeValue("gray.300", "gray.700")}>
                  <Stack direction={"row"} align="center">
                    <Image
                      w={"45px"}
                      h={"45px"}
                      borderRadius="sm"
                      src={item.urlimg}
                    />
                    <Text>ver</Text>
                  </Stack>
                </Td>
                <Td borderColor={useColorModeValue("gray.300", "gray.700")}>
                  {item.name}
                </Td>
                <Td
                  isNumeric
                  borderColor={useColorModeValue("gray.300", "gray.700")}
                >
                  {item.cantidad}u
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total</Th>
              <Th></Th>
              <Th isNumeric>{order.totalItems}u</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Text fontSize={"xl"}>TOTAL .... ${order.totalPrice}</Text>
    </Stack>
  );
}
