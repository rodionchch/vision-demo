import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';

import Logo from 'assets/images/logo.png';

export const Login = styled(SafeAreaView)`
  align-items: center;
`;

export const LoginLogo = styled.Image.attrs({
  source: Logo,
})`
  width: 86px;
  height: 90px;
  margin-top: 40px;
  margin-bottom: 80px;
`;

export const LoginText = styled(Text)`
  margin-bottom: 30px;
`;
