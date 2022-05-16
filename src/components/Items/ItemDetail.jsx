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
  Select
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import ItemCount from "./ItemCount";

export default function ItemDetail({prod}) {
  return (
    <Container maxW={"2xl"} mt={10}  >
      <SimpleGrid
        bg={useColorModeValue("gray.200", "gray.800")}
        borderRadius={{ base: 20, md: 40 }}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 5 }}
        py={{ base: 18, md: 22 }}
        px={{ base: 10, md: 18 }}
      >
        <Flex  justifyContent={"center"} >
          <Image
           alignSelf={"center"}
            rounded={"md"}
            alt={"product image"}
            src={prod.img}
            fit={"cover"}
            align={"center"}
            minWidth={"200px"}
            w={{ base: "250px",  md: "300px",  lg: "300px" }}
            h={{ base: "250Px", md: "300px",  lg: "300px" }}
          />
          
        </Flex>

        <Stack spacing={{ base: 2, md: 2}}  id="texto" >
          <Box as={"header"} justifyContent={"center"} >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
            >
              {prod.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={{ base: "md", sm: "md", lg: "lg" }}
            >
              {prod.price}
            </Text>
          </Box>

          <Stack 
            spacing={{ base: 2, sm: 2 }}
            direction={"column"}
            
          >
            <VStack spacing={{ base: 4, sm: 6 }} align="left" >
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
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

              <Select placeholder="Elegí tu talle">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </Select>
            </Box>
            
          </Stack>

          <ItemCount stock={prod.stock} initial={0} onAdd={(cantidad) => console.log(`añadiendo ${cantidad} items de ${props.name}`)} />

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 Dias habiles para envios</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
