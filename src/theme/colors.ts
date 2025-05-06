import {Theme} from '@react-navigation/native';
import {Appearance} from 'react-native';
/*
 ** Default colors
 */
const defaultPalette = {
  // Primary blues
  primary000: '#E4F6F8',
  primary100: '#B0E0E6',
  primary200: '#4682B4',
  primary300: '#007BA7',
  primary400: '#003366',
  primary500: '#007B7F',

  // Purple/Indigo scale
  secondary000: '#ECEBFD',
  secondary100: '#C4C0F8',
  secondary200: '#A7A2F4',
  secondary300: '#7F77EF',
  secondary400: '#665DEC',
  secondary500: '#4034E7',
  secondary600: '#2D25A4',
  secondary700: '#1B1661',

  // Greys
  neutral000: '#FEFEFD',
  neutral100: '#F8F8F4',
  neutral200: '#F5F5EE',
  neutral300: '#DFDFD9',
  neutral400: '#AEAEA9',
  neutral500: '#878783',
  neutral600: '#676764',
  neutral700: '#5C5A70',
  neutral800: '#3D3954',

  // Orange/Warm

  accent100: '#601B00',
  accent200: '#7D2400',
  accent300: '#A22E00',
  accent400: '#CF3B00',
  accent500: '#E44100',
  accent600: '#E96733',

  // Error/Warning colors
  error100: '#FCECE6',
  error200: '#F7C4B0',
  error300: '#F3A88A',
  error400: '#ED8054',
  error500: '#E96733',
  error600: '#CF3B00',

  // Base colors
  white: '#FFFFFF',
  whiteTransparent: '#FFFFFFCC',
  black: '#000000',

  // Overlays
  overlay20: 'rgba(5, 3, 17, 0.2)',
  overlay50: 'rgba(5, 3, 17, 0.5)',
  overlay80: 'rgba(5, 3, 17, 0.8)',
} as const;

/*
 ** Dark Color theme
 */
const darkPalette = {
  // Primary blues - inverted for dark mode
  primary000: '#003366',
  primary100: '#007B7F',
  primary200: '#007BA7',
  primary300: '#4682B4',
  primary400: '#B0E0E6',
  primary500: '#E4F6F8',

  // Purple/Indigo scale - darker variants
  secondary000: '#09061D',
  secondary100: '#0B0725',
  secondary200: '#0C0829',
  secondary300: '#1B1661',
  secondary400: '#231D7F',
  secondary500: '#2D25A4',
  secondary600: '#3A2FD2',
  secondary700: '#4034E7',

  // Greys - darker variants
  neutral000: '#050311',
  neutral100: '#070417',
  neutral200: '#09061D',
  neutral300: '#40476B',
  neutral400: '#545D8C',
  neutral500: '#6C78B5',
  neutral600: '#8A9AE8',
  neutral700: '#98A9FF',
  neutral800: '#DFE4FF',

  // Keep other colors similar but slightly muted
  accent100: '#601B00',
  accent200: '#7D2400',
  accent300: '#A22E00',
  accent400: '#CF3B00',
  accent500: '#E44100',
  accent600: '#E96733',

  error100: '#601B00',
  error200: '#7D2400',
  error300: '#A22E00',
  error400: '#CF3B00',
  error500: '#E44100',
  error600: '#E96733',

  white: '#FFFFFF',
  whiteTransparent: '#FFFFFF80',
  black: '#000000',

  overlay20: 'rgba(255, 255, 255, 0.2)',
  overlay50: 'rgba(255, 255, 255, 0.5)',
  overlay80: 'rgba(255, 255, 255, 0.8)',
} as const;

export const DEFAULT_COLORS = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette: defaultPalette,

  /**
   * Primary theme color used across the app
   */
  primary: defaultPalette.accent500,
  /**
   * Secondary theme color for accents and highlights
   */
  secondary: defaultPalette.white,
  /**
   * The default color of the screen background
   */
  background: defaultPalette.white,
  /**
   * Surface color for cards and elevated elements
   */
  surface: defaultPalette.neutral000,

  /**
   * The default text color in many components
   */
  text: defaultPalette.neutral800,
  /**
   * Secondary text information with reduced emphasis
   */
  textDim: defaultPalette.neutral600,
  /**
   * Light text color for subtle information
   */
  textLight: defaultPalette.neutral400,

  /**
   * The default color for header components
   */
  header: defaultPalette.primary500,
  /**
   * Background color for card components
   */
  card: defaultPalette.neutral000,
  /**
   * Primary button background color
   */
  button: defaultPalette.secondary500,
  /**
   * Border color for buttons
   */
  buttonBorder: defaultPalette.secondary600,
  /**
   * Background color for secondary/light buttons
   */
  buttonLight: defaultPalette.secondary000,

  /**
   * Text color for primary buttons
   */
  buttonTextPrimary: defaultPalette.white,
  /**
   * Text color for secondary buttons
   */
  buttonTextSecondary: defaultPalette.neutral600,

  /**
   * Default status bar color
   */
  statusBar: defaultPalette.primary500,
  /**
   * Primary loader/spinner color
   */
  loaderPrimary: defaultPalette.secondary500,
  /**
   * Secondary loader/spinner color
   */
  loaderSecondary: defaultPalette.neutral400,

  /**
   * Default border color for elements
   */
  border: defaultPalette.neutral200,
  /**
   * Color used for subtle separators and dividers
   */
  separator: defaultPalette.neutral100,
  /**
   * Color used for notifications and badges
   */
  notification: defaultPalette.accent500,
  /**
   * Color used for error messages
   */
  error: defaultPalette.error500,
  /**
   * Background color for error states
   */
  errorBackground: defaultPalette.error100,
  /**
   * A helper for making something see-thru
   */
  transparent: 'rgba(0, 0, 0, 0)',
};

export const DARK_COLORS = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette: darkPalette,

  /**
   * Primary theme color used across the app (dark mode)
   */
  primary: darkPalette.primary500,
  /**
   * Secondary theme color for accents and highlights (dark mode)
   */
  secondary: darkPalette.secondary500,
  /**
   * The default color of the screen background (dark mode)
   */
  background: darkPalette.black,
  /**
   * Surface color for cards and elevated elements (dark mode)
   */
  surface: darkPalette.neutral000,

  /**
   * The default text color in many components (dark mode)
   */
  text: darkPalette.neutral800,
  /**
   * Secondary text information with reduced emphasis (dark mode)
   */
  textDim: darkPalette.neutral600,
  /**
   * Light text color for subtle information (dark mode)
   */
  textLight: darkPalette.neutral400,

  /**
   * The default color for header components (dark mode)
   */
  header: darkPalette.primary500,
  /**
   * Background color for card components (dark mode)
   */
  card: darkPalette.neutral100,
  /**
   * Primary button background color (dark mode)
   */
  button: darkPalette.secondary500,
  /**
   * Border color for buttons (dark mode)
   */
  buttonBorder: darkPalette.secondary600,
  /**
   * Background color for secondary/light buttons (dark mode)
   */
  buttonLight: darkPalette.secondary200,

  /**
   * Text color for primary buttons (dark mode)
   */
  buttonTextPrimary: darkPalette.white,
  /**
   * Text color for secondary buttons (dark mode)
   */
  buttonTextSecondary: darkPalette.neutral400,

  /**
   * Default status bar color (dark mode)
   */
  statusBar: darkPalette.black,
  /**
   * Primary loader/spinner color (dark mode)
   */
  loaderPrimary: darkPalette.secondary500,
  /**
   * Secondary loader/spinner color (dark mode)
   */
  loaderSecondary: darkPalette.neutral400,

  /**
   * Default border color for elements (dark mode)
   */
  border: darkPalette.neutral300,
  /**
   * Color used for subtle separators and dividers (dark mode)
   */
  separator: darkPalette.neutral200,
  /**
   * Color used for notifications and badges (dark mode)
   */
  notification: darkPalette.accent500,
  /**
   * Color used for error messages (dark mode)
   */
  error: darkPalette.error500,
  /**
   * Background color for error states (dark mode)
   */
  errorBackground: darkPalette.error200,
  /**
   * A helper for making something see-thru
   */
  transparent: 'rgba(0, 0, 0, 0)',
};
/*
 ** Returning theme based on user theme selection
 */
function getTheme() {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark' ? DARK_COLORS : DEFAULT_COLORS;
}

export const COLORS = getTheme();

export type Colors = typeof COLORS;
/*
 ** Custome theme for adding new colors into it
 */
export type CustomTheme = Theme & {
  colors: Colors;
};
