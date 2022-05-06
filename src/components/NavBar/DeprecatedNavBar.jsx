import ColorModeWidget from "../ColorModeWidget/ColorModeWidget";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  WrapItem,
} from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";

const PRODUCTOS = [
  {
    label: "Holders",
    href: "#",
  },
  {
    label: "Straps",
    href: "#",
  },
  {
    label: "pulceras",
    href: "#",
  },
  {
    label: "Collares",
    href: "#",
  },
  {
    label: "Anillos",
    href: "#",
  },
];

function NavBar() {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", undefined)}
        color={useColorModeValue("gray.500", "gray.200")}
        
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction={"row"} spacing={20}>
            <Stack>
              <Box>Indih Design</Box>
            </Stack>

            <Stack direction={"row"} spacing={10}>
              <Menu>
                <MenuButton>Inicio</MenuButton>
              </Menu>
              <Menu>
                <MenuButton>Productos</MenuButton>
                <MenuList>
                  {PRODUCTOS.map((producto) => (
                    <MenuItem key={producto.label}>{producto.label}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton>Contacto</MenuButton>
              </Menu>
            </Stack>
          </Stack>
                    
          <Flex>
            <Stack direction={"row"}>
              <ColorModeWidget />
              <CartWidget />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
export default NavBar;
