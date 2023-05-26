import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Button, MD3Colors, Text} from 'react-native-paper';

export const Modal = styled(BottomSheetModal).attrs(
  (props: {hideHandle?: boolean}) => ({
    handleStyle: props.hideHandle ? {display: 'none'} : undefined,
    backgroundStyle: {
      backgroundColor: MD3Colors.secondary10,
      borderRadius: 22,
    },
    handleIndicatorStyle: {
      backgroundColor: MD3Colors.secondary90,
    },
  }),
)<{hideHandle?: boolean}>``;

export const ModalSafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const ModalContent = styled(ScrollView)``;

export const ModalActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 4px;
`;

export const ModalAction = styled(Button).attrs({
  mode: 'text',
})``;

export const ModalTitle = styled(Text).attrs({
  variant: 'titleMedium',
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  position: absolute;
  left: ${Dimensions?.get('window')?.width / 2 - 100 + 'px'};
  width: 200px;
  text-align: center;
`;
