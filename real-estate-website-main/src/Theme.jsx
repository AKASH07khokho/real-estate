import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const breakpoints = {
  sm: '320px',
  md: '500px',
  lg: '720px',
  xl: '960px',
  '2xl': '1200px',
}

export const theme = extendTheme({
  config,
  breakpoints,
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C',
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        transition: 'background-color 0.3s ease',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'pink',
      },
      variants: {
        gradient: {
          bg: 'linear-gradient(135deg, #D53F8C, #ED64A6)',
          color: 'white',
          _hover: {
            bg: 'linear-gradient(135deg, #B83280, #D53F8C)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(213, 63, 140, 0.4)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'pink.500',
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: 'pink.500',
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'pink.500',
      },
    },
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          borderRadius: 'xl',
          overflow: 'hidden',
        },
      }),
    },
  },
});