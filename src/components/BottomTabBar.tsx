import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import LayoutHelper from '../helpers/LayoutHelper';
import { getThemePrimaryTextColor, getThemeSecondaryColor } from '../theme/ThemeHelper';
import { themeName } from '../../App';
import i18n from '../data/langs';
import CustomText from './CustomText';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 0,
  },
  tabItemImage: {
    resizeMode: 'contain',
    flex: 0.8,
  },
});

type TabItemProps = {
  routeIndex: number;
  currentRouteIndex: number;
  routeName: string;
  onPress(): void;
};
const TabItem = (props: TabItemProps) => {
  const { routeIndex, currentRouteIndex, routeName, onPress } = props;
  let tintColor = routeIndex === currentRouteIndex ? 'red' : getThemePrimaryTextColor(themeName);
  let title = '';

  if (routeName === 'HomeScreen') {
    title = i18n.homeScreen.title;
  } else if (routeName === 'ProfileScreen') {
    title = i18n.profileScreen.title;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      onPress={onPress}
    >
      <CustomText style={{ color: tintColor }}>{title}</CustomText>
    </TouchableOpacity>
  );
};

type BottomTabBarProps = {
  state: any;
  navigation: any;
};

function BottomTabBar(props: BottomTabBarProps) {
  const { state, navigation } = props;
  const { index: currentRouteIndex } = state;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: getThemeSecondaryColor(themeName),
          height: LayoutHelper.navigationBarHeight,
        },
      ]}
    >
      {state.routes.map((route: any, index: number) => {
        const { name: routeName } = route;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (currentRouteIndex !== index && !event.defaultPrevented) {
            navigation.navigate(routeName, { withTabBar: true });
          }
        };

        return (
          <TabItem
            key={index.toString()}
            routeIndex={index}
            currentRouteIndex={currentRouteIndex}
            routeName={routeName}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}

export default BottomTabBar;
