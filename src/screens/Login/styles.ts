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
  margin-top: 10%;
  margin-bottom: 80px;
  margin-bottom: 20%;
`;

export const LoginText = styled(Text)`
  margin-bottom: 30px;
  margin-bottom: 8%;
`;
