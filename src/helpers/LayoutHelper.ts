import { PixelRatio } from 'react-native';

export default class LayoutHelper {
  static getResponsiveFontSize(value: number): number {
    return PixelRatio.getFontScale() * value;
  }

  static navigationBarHeight = 60;

  static fontSize = {
    xxsmall: this.getResponsiveFontSize(8),
    xsmall: this.getResponsiveFontSize(10),
    small: this.getResponsiveFontSize(12),
    medium: this.getResponsiveFontSize(14),
    large: this.getResponsiveFontSize(16),
    xlarge: this.getResponsiveFontSize(18),
    xxlarge: this.getResponsiveFontSize(20),
    xxxlarge: this.getResponsiveFontSize(22),
  };
}
