import styled from 'styled-components/native';
import {AnimatedFAB} from 'react-native-paper';

export const FAB = styled(AnimatedFAB)<{nav?: boolean}>`
  bottom: 46px;
  position: absolute;
  ${props =>
    props.nav &&
    `
    bottom: 16px;
  `}
`;
