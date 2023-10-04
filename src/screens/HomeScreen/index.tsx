import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { type StackNavigation } from '../../../App';
import i18n from '../../data/langs';
import Screen from '../../components/Screen';

import CustomText from '../../components/CustomText';
import { getThemeSecondaryColor } from '../../theme/ThemeHelper';

import { styles } from './styles';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <Screen
      withTabBar
      style={{
        backgroundColor: getThemeSecondaryColor('defaultTheme'),
        ...styles.mainContainer,
      }}
      headerTitle={i18n.homeScreen.title}
    >
      <TouchableOpacity onPress={() => navigation.navigate('HomeDetail')}>
        <CustomText style={{ color: 'blue', marginTop: 30 }} typography="body1">
          {i18n.homeScreen.goToDetailScreen}
        </CustomText>
      </TouchableOpacity>
    </Screen>
  );
};

export default HomeScreen;
