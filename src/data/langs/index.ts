import LocalizedStrings, { type LocalizedStringsMethods } from 'react-native-localization';

import en from './default.json';
import tr from './tr.json';

const i18n: typeof en & LocalizedStringsMethods = new LocalizedStrings({
  en,
  tr,
});

export default i18n;
