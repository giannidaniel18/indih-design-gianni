import { Box, Heading, Link, Text, Button, Stack } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link as reactLink } from "react-router-dom";

export default function SuccessResult({ title, text, buttonTo, buttonText }) {
  return (
    <Stack alignItems="center" py={10} px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {title}
      </Heading>
      <Text color={"gray.500"}>{text}</Text>
      <Stack direction={"row"}>
        <Link as={reactLink} to={"/productos"}>
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, primary, primaryDark)"
            color="white"
            variant="solid"
          >
            Continuar comprando
          </Button>
        </Link>
        <Link as={reactLink} to={`/${buttonTo}`}>
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, primary, primaryDark)"
            color="white"
            variant="solid"
          >
            {buttonText}
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
