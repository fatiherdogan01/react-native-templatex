import React from 'react';
import { Text, TextStyle } from 'react-native';

import { Colors } from '../theme/Colors';
import LayoutHelper from '../helpers/LayoutHelper';
import { Theme } from '../theme/Themes';
import { getTheme } from '../theme/ThemeHelper';
import { themeName } from '../../App';

type Props = {
  typography?:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'button';
  style?: TextStyle;
  children?: React.ReactNode;
};

const headline1Style: TextStyle = {
  fontSize: LayoutHelper.fontSize.xxxlarge,
};
const headline2Style: TextStyle = {
  fontSize: LayoutHelper.fontSize.xxlarge,
};
const headline3Style: TextStyle = {
  fontSize: LayoutHelper.fontSize.xlarge,
};
const body1Style: TextStyle = {
  fontSize: LayoutHelper.fontSize.large,
};
const body2Style: TextStyle = {
  fontSize: LayoutHelper.fontSize.medium,
};
const body3Style: TextStyle = {
  fontSize: LayoutHelper.fontSize.small,
};
const body4Style: TextStyle = {
  fontSize: LayoutHelper.fontSize.xsmall,
};
const body5Style: TextStyle = {
  fontSize: LayoutHelper.fontSize.xxsmall,
};

const buttonTextStyle: TextStyle = {
  fontSize: LayoutHelper.fontSize.medium,
  color: Colors.white,
};

const defalutTextStyle: TextStyle = {
  fontSize: LayoutHelper.fontSize.medium,
};

function CustomText({ typography, style, children, ...restProps }: Props) {
  const theme: Theme = getTheme(themeName);
  let fontFamily;
  let textStyle;
  let textColor;
  switch (typography) {
    case 'headline1':
      textStyle = headline1Style;
      fontFamily = theme.primaryFontFamily;
      textColor = theme.primaryTextColor;
      break;
    case 'headline2':
      textStyle = headline2Style;
      fontFamily = theme.primaryFontFamily;
      textColor = theme.primaryTextColor;
      break;
    case 'headline3':
      textStyle = headline3Style;
      fontFamily = theme.primaryFontFamily;
      textColor = theme.primaryTextColor;
      break;
    case 'body1':
      textStyle = body1Style;
      fontFamily = theme.secondaryFontFamily;
      textColor = theme.secondaryTextColor;
      break;
    case 'body2':
      textStyle = body2Style;
      fontFamily = theme.secondaryFontFamily;
      textColor = theme.secondaryTextColor;
      break;
    case 'body3':
      textStyle = body3Style;
      fontFamily = theme.secondaryFontFamily;
      textColor = theme.secondaryTextColor;
      break;
    case 'body4':
      textStyle = body4Style;
      fontFamily = theme.secondaryFontFamily;
      textColor = theme.secondaryTextColor;
      break;
    case 'body5':
      textStyle = body5Style;
      fontFamily = theme.secondaryFontFamily;
      textColor = theme.secondaryTextColor;
      break;
    case 'button':
      textStyle = buttonTextStyle;
      fontFamily = theme.primaryFontFamily;
      break;
    default:
      textStyle = defalutTextStyle;
      fontFamily = theme.primaryFontFamily;
      textColor = theme.primaryTextColor;
  }

  return (
    <Text
      style={[
        {
          fontFamily,
          color: textColor,
        },
        textStyle,
        style,
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}

export default CustomText;
