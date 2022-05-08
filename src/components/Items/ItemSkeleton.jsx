import { Center, Skeleton, Stack, Box, Image } from "@chakra-ui/react";
import React from "react";

export default function ItemSkeleton() {
  return (
    <Stack
      minW={230}
      maxW={"330px"}
      mt={10}
      mx={"auto"}
      p={6}
      boxShadow={"2xl"}
      rounded={"lg"}
      width={"100%"}
    >
      <Stack>
        <Skeleton
          height="250px"
          mb={4}
          mt={-10}
          w="230px"
          borderRadius="lg"
          alignSelf="center"
        />
        <Skeleton
          height="20px"
          width={"100px"}
          alignSelf="center"
          borderRadius="lg"
          mb={4}
        />
        <Skeleton
          height="25px"
          width={"150px"}
          alignSelf="center"
          borderRadius="lg"
          mb={4}
        />
        <Skeleton
          height="20px"
          width={"100px"}
          alignSelf="center"
          borderRadius="lg"
        />
      </Stack>
      <Stack marginTop={"150px"}>
        <Skeleton
          height="40px"
          width={"100%"}
          alignSelf="center"
          borderRadius="lg"
        />
      </Stack>
    </Stack>
  );
}
