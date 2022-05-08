import React from "react";
import { Icon, Center, Flex, Stack , Text} from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";

export default function CartWidget() {
  return (
 
     <Stack direction={"row"}  alignItems={"center"} justifyContent={"center"}>
        <Icon as={BsCart} />
        <Text color >2</Text>  
      
     </Stack>
      
   
  );
}
