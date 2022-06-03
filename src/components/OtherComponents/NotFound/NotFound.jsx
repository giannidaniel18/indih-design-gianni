import React from "react";
import { Box, Button, Heading, Text, Link, Center } from "@chakra-ui/react";
import { Link as reactLink } from "react-router-dom";

export default function NotFound({ title, subTitle, description }) {
  return (
    <Center>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, primary, primaryDark)"
          backgroundClip="text"
        >
          {title}
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          {subTitle}
        </Text>
        <Text color={"gray.500"} mb={6}>
          {description}
        </Text>

        <Link as={reactLink} to={"/productos"}>
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
    </Center>
  );
}
