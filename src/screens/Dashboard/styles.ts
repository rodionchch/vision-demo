import styled from 'styled-components/native';
import {BottomNavigation as PaperBottomNavigation} from 'react-native-paper';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export const BottomNavigation = styled(PaperBottomNavigation)``;

export const BottomNavigationButton = styled.View`
  flex: 1;
`;

export const BottomNavigationTouchable = styled(TouchableWithoutFeedback)`
  ${props => props.disabled && `opacity: 0.3;`}
`;
