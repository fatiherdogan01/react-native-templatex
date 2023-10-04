import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

import LayoutHelper from '../helpers/LayoutHelper';

import { getThemePrimaryColor, getThemeSecondaryColor } from '../theme/ThemeHelper';
import { themeName } from '../../App';
import CustomText from './CustomText';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  withTabBar?: boolean;
  headerLeft?: ReactNode;
  headerTitle?: string;
  headerRight?: ReactNode;
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: ms(46),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  headerLeft: {
    flex: 0.2,
    flexDirection: 'row',
  },
  headerTitle: {
    flex: 0.6,
    textAlign: 'center',
  },
  headerRight: {
    flex: 0.2,
    flexDirection: 'row-reverse',
  },
});

function Screen(props: Props) {
  const { children, style, withTabBar, headerLeft, headerTitle, headerRight } = props;
  const headerContent = (
    <View style={styles.header}>
      <View style={styles.headerLeft}>{headerLeft}</View>
      <CustomText typography="headline1" style={styles.headerTitle}>
        {headerTitle}
      </CustomText>
      <View style={styles.headerRight}>{headerRight}</View>
    </View>
  );
  return (
    <View
      style={[
        style,
        {
          backgroundColor: getThemePrimaryColor(themeName),
          marginBottom: withTabBar ? -LayoutHelper.navigationBarHeight : undefined,
        },
      ]}
    >
      {headerContent}
      {children}
    </View>
  );
}

export default Screen;
