import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppLayout } from '../components/layouts/appLayout'
import { DAppProvider } from '@usedapp/core'
import { web3Config } from './web3Config'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.900',
        color: 'white',
        m: '50px',
        maxWidth: '100%',
        overflowX: 'hidden',
      },
    },
  },
  colors: {
    gray: {
      100: '#4B556B',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#1B1D21',
      800: '#212121',
      900: '#121316',
    },
    silver: {
      100: '#EAEBEC',
    },
    pink: {
      100: '#C459AE',
      200: '#AF5099',
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          p: '10px',
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
            bg: 'rgba(255,255,255, .2)',
            cursor: 'cursor',
          },
        },
        bid: {
          ':hover': {
            outline: 'none',
            boxShadow: 'none',
            bg: 'rgba(255,255,255, .2)',
            cursor: 'cursor',
          },
        },
      },
    },
    Text: {
      variants: {
        title: {
          fontSize: 'large',
          fontWeight: 'extrabold',
        },
        subtitle: {
          fontSize: 'md',
          color: 'gray.600',
        },
        normal: {
          fontWeight: 'bold',
          fontSize: '2xl',
        },
      },
    },
  },
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DAppProvider config={web3Config}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </DAppProvider>
    </ChakraProvider>
  )
}

export default MyApp
