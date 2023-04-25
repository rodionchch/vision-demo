import React, {useMemo} from 'react';
import {Portal} from 'react-native-paper';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import * as s from './styles';

export type ModalActions = [
  {label?: string; onPress?: () => void},
  {label?: string; onPress?: () => void},
];

type ModalProps = {
  modalRef: React.RefObject<BottomSheetModal>;
  title?: string;
  actions?: ModalActions;
  children?: React.ReactNode;
};

const getBackdropComponent = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
);

const Modal: React.FC<ModalProps> = ({modalRef, title, actions, children}) => {
  const snapPoints = useMemo(() => ['92%', '92%'], []);

  return (
    <Portal>
      <BottomSheetModalProvider>
        <s.Modal
          ref={modalRef}
          index={1}
          hideHandle={!!actions}
          snapPoints={snapPoints}
          onChange={() => {}}
          backdropComponent={getBackdropComponent}>
          {actions && (
            <s.ModalActions>
              {actions?.map(({label, onPress}) => (
                <s.ModalAction onPress={onPress}>{label}</s.ModalAction>
              ))}
              <s.ModalTitle>{title}</s.ModalTitle>
            </s.ModalActions>
          )}
          <s.ModalContent>{children}</s.ModalContent>
        </s.Modal>
      </BottomSheetModalProvider>
    </Portal>
  );
};

export default Modal;
