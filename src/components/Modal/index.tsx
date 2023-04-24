import {Portal} from 'react-native-paper';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import * as s from './styles';

const Modal = ({modalRef, snapPoints, onSheetChanges}) => {
  return (
    <Portal>
      <BottomSheetModalProvider>
        <s.Modal
          ref={modalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={onSheetChanges}>
          <s.ModalContent></s.ModalContent>
        </s.Modal>
      </BottomSheetModalProvider>
    </Portal>
  );
};

export default Modal;
