import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  colors: {
    primary: "#cda5f3",
    primaryDark: "#8674aa",
    primaryLight: "#dba5f3",
    secondary: "#7481a8",
    secondaryDark: "#4e597e",
    secondaryLight: "#a6b8f3",
  },
  styles: {
    global: (props) => ({
      "html, body, #root": {
        backgroundColor: mode("gray.100", undefined)(props),
      },
    }),
  },
});
