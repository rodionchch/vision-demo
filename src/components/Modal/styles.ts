import styled from 'styled-components/native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {MD3Colors} from 'react-native-paper';

export const Modal = styled(BottomSheetModal).attrs({
  backgroundStyle: {
    backgroundColor: MD3Colors.secondary20,
  },
  handleIndicatorStyle: {
    backgroundColor: MD3Colors.secondary90,
  },
})``;

export const ModalContent = styled.View``;
