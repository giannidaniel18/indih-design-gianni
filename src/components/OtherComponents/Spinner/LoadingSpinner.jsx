import { Center, Heading, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function LoadingSpinner() {
  return (
    <Center>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="secondary"
        color="primary"
        size="xl"
      />
      <Heading mx={2}>Cargando...</Heading>
    </Center>
  );
}
