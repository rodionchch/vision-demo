import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Button, Text} from 'react-native-paper';

export const Modal = styled(BottomSheetModal).attrs(
  (props: {hideHandle?: boolean; backgroundColor?: string; theme: any}) => ({
    handleStyle: props.hideHandle ? {display: 'none'} : undefined,
    backgroundStyle: {
      backgroundColor: props.theme.colors.elevation.level2,
      borderRadius: 22,
    },
    handleIndicatorStyle: {},
  }),
)<any>``;

export const ModalSafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const ModalContent = styled(ScrollView)`
  flex: 1;
`;

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
