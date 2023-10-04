import * as React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useEffect } from 'react';

import changeNavigationBarColor from 'react-native-navigation-bar-color';

import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabBar from './src/components/BottomTabBar';
import { getThemePrimaryColor, getThemeProperty, THEME } from './src/theme/ThemeHelper';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import { type ThemeName } from './src/theme/Themes';

type ScreenNames = ['MainTab', 'Home', 'Profile', 'HomeDetail'];
type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export const themeName: ThemeName = 'defaultTheme';
const MainTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Tab.Screen name="HomeScreen">{(props) => <HomeScreen />}</Tab.Screen>
    <Tab.Screen name="ProfileScreen">{(props) => <ProfileScreen />}</Tab.Screen>
  </Tab.Navigator>
);

const setNavigationColor = (color: string) => {
  changeNavigationBarColor(color, getThemeProperty(themeName, THEME.TYPE) !== 'dark');
};
const CustomBottomBar = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        height: insets.bottom,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: getThemePrimaryColor(themeName),
      }}
    />
  );
};
const CustomStatusBar = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        height: insets.top,
        backgroundColor: getThemePrimaryColor(themeName),
      }}
    >
      <StatusBar
        barStyle={
          getThemeProperty(themeName, THEME.TYPE) === 'dark' ? 'light-content' : 'dark-content'
        }
        backgroundColor={getThemePrimaryColor(themeName)}
      />
    </View>
  );
};
export default function App() {
  useEffect(() => {
    setNavigationColor(getThemePrimaryColor(themeName));
  }, []);
  return (
    <SafeAreaProvider>
      <CustomStatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainTab" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTab" component={MainTabNavigator} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <CustomBottomBar />
    </SafeAreaProvider>
  );
}
