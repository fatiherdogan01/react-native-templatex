export type Theme = {
  name: string;
  type: 'dark' | 'light';
  primaryColor: string;
  secondaryColor: string;
  borderColor: string;
  buttonColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  placeholderTextColor: string;
  primaryFontFamily: string;
  secondaryFontFamily: string;
};
export type ThemeName = 'defaultTheme' | 'darkTheme';

const darkTheme: Theme = {
  name: 'Dark',
  type: 'dark',
  primaryColor: '#000000',
  secondaryColor: '#30312B',
  borderColor: '#E5E5E5',
  buttonColor: '#D8ED7F',
  primaryTextColor: '#FFFFFF',
  secondaryTextColor: '#FFFFFF',
  placeholderTextColor: '#E5E5E5',
  primaryFontFamily: '',
  secondaryFontFamily: '',
};
const defaultTheme: Theme = {
  name: 'Default',
  type: 'light',
  primaryColor: '#FCFCFC',
  secondaryColor: '#EBEEF3',
  borderColor: '#CCCFD4',
  buttonColor: '#8041D0',
  primaryTextColor: '#2B2B2B',
  secondaryTextColor: '#2B2B2B',
  placeholderTextColor: '#828282',
  primaryFontFamily: '',
  secondaryFontFamily: '',
};

export default {
  defaultTheme,
  darkTheme,
};
