import React, {useMemo} from 'react';
import {Keyboard} from 'react-native';
import {Portal} from 'react-native-paper';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import {isIOS} from 'constants/Platform';
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
  const snapPoints = useMemo(
    () => (isIOS ? ['94%', '94%'] : ['100%', '100%']),
    [],
  );

  return (
    <Portal>
      <BottomSheetModalProvider>
        <s.Modal
          ref={modalRef}
          index={1}
          hideHandle={!!actions}
          snapPoints={snapPoints}
          onAnimate={() => {
            Keyboard.dismiss();
          }}
          backdropComponent={getBackdropComponent}>
          <s.ModalSafeArea>
            {actions && (
              <s.ModalActions>
                {actions?.map(({label, onPress}) => (
                  <s.ModalAction onPress={onPress}>{label}</s.ModalAction>
                ))}
                <s.ModalTitle>{title}</s.ModalTitle>
              </s.ModalActions>
            )}
            <s.ModalContent>{children}</s.ModalContent>
          </s.ModalSafeArea>
        </s.Modal>
      </BottomSheetModalProvider>
    </Portal>
  );
};

export default Modal;
