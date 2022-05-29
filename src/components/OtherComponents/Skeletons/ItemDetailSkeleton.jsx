import {
  Container,
  Flex,
  Image,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function ItemDetailSkeleton() {
    const borderRadius= 8
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
          <Skeleton
            alignSelf={"center"}
            minW={"300px"}
            rounded={"md"}
            alt={"product image"}
            fit={"cover"}
            align={"center"}
            w={{ base: "300px", md: "500px", lg: "500px" }}
            h={{ base: "300px", md: "450px", lg: "450px" }}
          />
        </Flex>

        <Stack spacing={{ base: 2, md: 8}}>
          <Stack justifyContent={"center"}>
            <Skeleton h={"40px"} w={"70%"} borderRadius={2} />
          </Stack>

          <Stack spacing={{ base: 5}} direction={"column"}>
            <VStack spacing={{ base: 4, sm: 6 }} align="left">
              <Skeleton h={"30px"} w={"30%"} borderRadius={2} />
            </VStack>
            <Stack spacing={5}>
            <SkeletonText  noOfLines={2} spacing='4' />
            </Stack>
            <SkeletonText mt='4' noOfLines={4} spacing='2' />
          </Stack>

          <Stack direction="column" spacing={2}>
            <Skeleton h={"20px"} w={"40%"} borderRadius={2}/>
            <Skeleton h={"40px"} w={"100%"} borderRadius={2}/>
          </Stack>
          <Stack direction="row" alignContent={"center"}  >
            <Skeleton h={"30px"} w={"40%"} borderRadius={8}/>
            <Skeleton h={"30px"} w={"60%"} borderRadius={50}/>
          </Stack>
          <Skeleton h={"20px"} w={"60%"} borderRadius={2}/>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
