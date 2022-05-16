import React from "react";
import { Icon, Center, Flex, Stack , Text, Badge} from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";

export default function CartWidget() {
  return (
 
     <Stack direction={"row"}  alignItems={"center"} justifyContent={"center"}>
        <Icon as={BsCart} />
        <Badge borderRadius={"50%"}  colorScheme='purple'>2</Badge>
      
     </Stack>
      
   
  );
}
