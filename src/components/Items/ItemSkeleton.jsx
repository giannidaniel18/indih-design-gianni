import { Center, Skeleton, Stack, Box, Image } from "@chakra-ui/react";
import React from "react";

export default function ItemSkeleton() {
  return (
    <Stack
      mt={10}
      role={"group"}
      p={6}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      width={"330px"}
    >
      <Stack>
        <Skeleton height="250px" mb={4} mt={-10} w="280px" borderRadius="lg" />
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
