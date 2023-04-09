import styled from 'styled-components/native';
import {IconButton, MD3Colors} from 'react-native-paper';
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

export const CodeDotsDot = styled.View<{filled?: boolean}>`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background: ${MD3Colors.neutral50};
  ${props => props.filled && `background: ${MD3Colors.neutral80};`}
`;

export const CodeButton = styled(IconButton)`
  margin-bottom: 8px;
`;

export const CodeButtonIcon = styled(MaterialCommunityIcons).attrs({
  color: MD3Colors.neutral80,
})<{isActionButton?: boolean | 'backspace'}>`
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
