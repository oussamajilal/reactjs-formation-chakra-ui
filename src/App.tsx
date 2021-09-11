import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Menu from "./components/Menu"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Menu />
  </ChakraProvider>
)
