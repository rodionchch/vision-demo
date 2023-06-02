import styled from 'styled-components/native';
import {IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Code = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 284px;
  justify-content: space-between;
`;

export const CodeDots = styled.View`
  flex-direction: row;
  width: 115px;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const CodeDotsDot = styled.View<any>`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background: ${props => props.theme.colors.surfaceVariant};
  ${props => props.filled && `background: ${props.theme.colors.primary};`}
`;

export const CodeButton = styled(IconButton)`
  margin-bottom: 8px;
`;

export const CodeButtonIcon = styled(MaterialCommunityIcons).attrs(props => ({
  color: props.color,
}))<{isActionButton?: boolean | 'backspace'}>`
  width: 50px;
  height: 50px;
  margin-top: -9px;
  margin-left: -9px;
  align-self: center;
  ${props =>
    props.isActionButton &&
    `
    margin-top: 18px;
    margin-left: 18px;
  `}
  ${props =>
    props.isActionButton === 'backspace' &&
    `
    margin-left: 15px;
  `}
`;
