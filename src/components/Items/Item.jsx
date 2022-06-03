import ItemCount from "./ItemCount";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import ItemDetailButton from "./ItemDetailButton";

function Item(props) {
  
  return (
   
      <Box
        
        minW={30}
        maxH={500}
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("gray.200", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          pos={"relative"}
          height={"240px"}         
        >
          <Image
            rounded={"lg"}
            height={270}
            width={260}
            objectFit={"cover"}
            src={props.prod.urlimg}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {props.prod.category}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {props.prod.name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${props.prod.price}
            </Text>
          </Stack>
        </Stack>
        <ItemDetailButton id={props.prod.id}/>
      </Box>
   
  );
}

export default Item;
