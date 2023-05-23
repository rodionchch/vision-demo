import {Platform} from 'react-native';

enum PlatformEnum {
  iOS = 'ios',
  Android = 'android',
}

const isIOS = Platform.OS === PlatformEnum.iOS;

const isAndroid = Platform.OS === PlatformEnum.Android;

export {isIOS, isAndroid};
