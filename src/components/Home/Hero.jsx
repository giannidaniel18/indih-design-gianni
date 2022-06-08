import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";
import Carrousel from "../Carrousel/Carrousel";

export default function Hero() {
  return (
    <Container maxW={"120%"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 5, md: 5 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Indih Design <br />
          <Text as={"span"} color={"primary"}>
            Diseños a medida
          </Text>
        </Heading>
        <Carrousel />
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        ></Stack>
      </Stack>
    </Container>
  );
}