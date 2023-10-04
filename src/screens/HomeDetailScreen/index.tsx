import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Screen from '../../components/Screen';
import CustomText from '../../components/CustomText';

import i18n from '../../data/langs';
import { styles } from './styles';

const HomeDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen
      headerLeft={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CustomText>{i18n.common.back}</CustomText>
        </TouchableOpacity>
      }
      headerTitle={i18n.homeDetailScreen.title}
      withTabBar
      style={{
        ...styles.mainContainer,
      }}
    >
      <CustomText typography="body1">{i18n.homeDetailScreen.title}</CustomText>
    </Screen>
  );
};

export default HomeDetailScreen;
