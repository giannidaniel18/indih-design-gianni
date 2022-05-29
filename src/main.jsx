import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './resources/theme/theme'
import getFirestoreApp from './firebase/config'

getFirestoreApp()

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode= {theme.config.initialColorMode} />
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

