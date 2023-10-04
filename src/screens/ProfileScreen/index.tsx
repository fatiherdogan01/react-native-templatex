import React from 'react';

import Screen from '../../components/Screen';
import CustomText from '../../components/CustomText';

import { getThemeSecondaryColor } from '../../theme/ThemeHelper';

import i18n from '../../data/langs';
import { themeName } from '../../../App';
import { styles } from './styles';

function ProfileScreen() {
  return (
    <Screen
      headerTitle={i18n.profileScreen.title}
      withTabBar
      style={{
        backgroundColor: getThemeSecondaryColor(themeName),
        ...styles.mainContainer,
      }}
    >
      <CustomText>{i18n.profileScreen.title}</CustomText>
    </Screen>
  );
}

export default ProfileScreen;
