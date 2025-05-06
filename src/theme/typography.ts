import {StyleSheet} from 'react-native';

const fonts = {
  openSans: {
    light: 'OpenSans-Light',
    regular: 'OpenSans-Regular',
    medium: 'OpenSans-Medium',
    semiBold: 'OpenSans-SemiBold',
    bold: 'OpenSans-Bold',
    extraBold: 'OpenSans-ExtraBold',
    italic: 'OpenSans-Italic',
  },
  zain: {
    extraLight: 'Zain-ExtraLight',
    light: 'Zain-Light',
    regular: 'Zain-Regular',
    bold: 'Zain-Bold',
    extraBold: 'Zain-ExtraBold',
    black: 'Zain-Black',
    italic: 'Zain-Italic',
    lightItalic: 'Zain-LightItalic',
  },
};

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.openSans,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: fonts.zain,
};

export const Globaltypography = StyleSheet.create({
  button: {
    fontFamily: typography.primary.medium,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
  },
  default: {
    fontFamily: typography.primary.regular,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  formLabel: {
    fontFamily: typography.primary.regular,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
  },
  heading: {
    fontFamily: typography.secondary.bold,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 30,
  },
  headingDescription: {
    fontFamily: typography.primary.regular,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
  },
  smallButton: {
    fontFamily: typography.primary.regular,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15,
  },
  subHeading: {
    fontFamily: typography.secondary.bold,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 23,
  },
  textInputHeading: {
    fontFamily: typography.primary.regular,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16,
  },
});
