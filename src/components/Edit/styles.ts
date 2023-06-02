import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

export const Edit = styled.View`
  padding: 20px 12px;
`;

export const EditInput = styled(TextInput).attrs({
  mode: 'outlined',
})`
  background: ${props => props.theme.colors.elevation.level2};
  margin-bottom: 20px;
`;
