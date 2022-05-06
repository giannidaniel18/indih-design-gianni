import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

export default function ColorModeWidget() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {colorMode === "light" ? (
        <Button onClick={toggleColorMode} _focus={{ style: "none" }} variant="unstyled">
          <MoonIcon />
        </Button>
      ) : (
        <Button onClick={toggleColorMode} _focus={{ style: "none" }} variant="unstyled">
          <SunIcon />
        </Button>
      )}
    </>
    // <Button onClick={toggleColorMode} borderRadius='50'>
    //   {colorMode === "light" ? <MoonIcon color="primaryDark"/> : <SunIcon />}
    // </Button>
  );
}
