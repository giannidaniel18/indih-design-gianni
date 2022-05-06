import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  IconButton,
  PinInputField,
  PinInput,
  Button,
  Icon,
} from "@chakra-ui/react";

import { BsCart } from "react-icons/bs";

function Item(props) {
  const addToCartColors = useColorModeValue("primaryDark", "primary");
  return (
    <Center py={12} minW={300} >
      <Box
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
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${props.img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={250}
            width={282}
            objectFit={"cover"}
            src={props.img}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {props.category}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {props.name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {props.price}
            </Text>
            {/* <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text> */}
          </Stack>
        </Stack>
        <Stack mt={5} direction={"row"} justifyContent={"space-between"}>
          <IconButton
            variant="outline"
            borderColor={addToCartColors}
            color={addToCartColors}
            aria-label="Send email"
            icon={<MinusIcon />}
          />
          <PinInput defaultValue="0">
            <PinInputField
              borderColor={addToCartColors}
              color={addToCartColors}
            />
          </PinInput>
          <IconButton
            variant="outline"
            borderColor={addToCartColors}
            color={addToCartColors}
            aria-label="Send email"
            icon={<AddIcon />}
          />
        </Stack>
        <Stack direction={"row"} justify={"center"}>
          <Button bg="primary" variant="solid" w={"100%"} mt={3}>
            Add to cart
            <Icon ml={1} as={BsCart} />
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

export default Item;
