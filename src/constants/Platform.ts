import {Platform} from 'react-native';

enum PlatformEnum {
  iOS = 'ios',
  Android = 'android',
}

const iOS = Platform.OS === PlatformEnum.iOS;

const Android = Platform.OS === PlatformEnum.Android;

export {iOS, Android};
