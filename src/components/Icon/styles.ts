import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Icon = styled(MaterialCommunityIcons)<{disabled?: boolean}>`
  ${props => props.disabled && `opacity: 0.3;`}
`;
