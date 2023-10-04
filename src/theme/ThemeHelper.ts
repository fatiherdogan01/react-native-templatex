import Themes from './Themes';
import type {Theme, ThemeName} from './Themes';

export const THEME: any = {
  TYPE: 'type',
  PRIMARY_COLOR: 'primaryColor',
  SECONDARY_COLOR: 'secondaryColor',
  BACKGROUND_COLOR: 'backgroundColor',
  BORDER_COLOR: 'borderColor',
  BUTTON_COLOR: 'buttonColor',
  PRIMARY_TEXT_COLOR: 'primaryTextColor',
  SECONDARY_TEXT_COLOR: 'secondaryTextColor',
  PLACEHOLDER_TEXT_COLOR: 'placeholderTextColor',
  PRIMARY_FONT_FAMILY: 'primaryFontFamily',
  SECONDARY_FONT_FAMILY: 'secondaryFontFamily',
};
Object.freeze(THEME);

export const getThemePrimaryColor = (themeName: ThemeName): string => {
  return Themes[themeName].primaryColor;
};

export const getThemeSecondaryColor = (themeName: ThemeName): string => {
  return Themes[themeName].secondaryColor;
};

export const getThemePrimaryTextColor = (themeName: ThemeName): string => {
  return Themes[themeName].primaryTextColor;
};

export const getThemeProperty = (
  themeName: ThemeName,
  propertyName: string,
): string => {
  // @ts-ignore
  return Themes[themeName][propertyName];
};

export const getTheme = (themeName: ThemeName): Theme => {
  return Themes[themeName];
};
