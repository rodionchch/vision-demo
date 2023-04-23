import {MD3Colors, Text} from 'react-native-paper';
import styled from 'styled-components/native';

export const NavigationBottomLabel = styled(Text)`
  text-align: center;
  ${props => props.disabled && `color: ${MD3Colors.secondary40};`}
`;
