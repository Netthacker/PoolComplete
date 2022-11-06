import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    gray: {
      950: '#09090A',
      900: '#121214',
      800: '#202024',
      600: '#323238',
      300: '#8D8D99',
      200: '#C4C4CC',
      100: '#f1f1f1',
    },
    green: {
      400: '#00b400',
      500: '#047C3F',
      600: '#35875D'
    },
    newYellow:{
      400: '#FFFF5C',
    },
    yellow: {
      400: '#FFFF5C',
      500: '#F7DD43',
      600: '#BBA317',
    },
    red: {
      500: '#DB4437',
    },
    white: '#FFFFFF'
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
    medium: 'Roboto_500Medium'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
    22: 87
  }
});