import { Stack, Box, Text, Container, Flex } from "@chakra-ui/react";
import React from "react";

export default function ItemListContainer() {
  return (
    <Container>
      <Flex justifyContent={"center"}>
        <Stack spacing={5} direction={"row"}>
          <Box bg={"red.300"}>
            <Text>Item 1</Text>
          </Box>
          <Box bg={"red.300"}>
            <Text>Item 1</Text>
          </Box>
          <Box bg={"red.300"}>
            <Text>Item 1</Text>
          </Box>
          <Box bg={"red.300"}>
            <Text>Item 1</Text>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
}
