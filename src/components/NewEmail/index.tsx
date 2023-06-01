import React, {RefObject} from 'react';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import Modal from 'components/Modal';

import * as s from './styles';
import {Keyboard} from 'react-native';

type NewEmailProps = {
  modalRef: RefObject<BottomSheetModalMethods>;
};

const NewEmail: React.FC<NewEmailProps> = ({modalRef}) => {
  return (
    <Modal
      modalRef={modalRef}
      title={'New Message'}
      actions={[
        {
          label: 'Cancel',
          onPress: () => {
            modalRef.current?.close();
          },
        },
        {
          label: 'Send',
          onPress: () => {
            modalRef.current?.close();
          },
        },
      ]}>
      <s.NewEmailKeyboardAvoidingView>
        <s.NewEmailTouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <s.NewEmail>
            <s.NewEmailHeader>
              <s.NewEmailHeaderItem>
                <s.NewEmailHeaderItemLabel>To:</s.NewEmailHeaderItemLabel>
                <s.NewEmailHeaderInput />
              </s.NewEmailHeaderItem>
              <s.NewEmailDivider />
              <s.NewEmailHeaderItem>
                <s.NewEmailHeaderItemLabel>From:</s.NewEmailHeaderItemLabel>
                <s.NewEmailHeaderInput />
              </s.NewEmailHeaderItem>
              <s.NewEmailDivider />

              <s.NewEmailHeaderItem>
                <s.NewEmailHeaderItemLabel>CC:</s.NewEmailHeaderItemLabel>
                <s.NewEmailHeaderInput />
              </s.NewEmailHeaderItem>
              <s.NewEmailDivider />

              <s.NewEmailHeaderItem>
                <s.NewEmailHeaderItemLabel>Subject:</s.NewEmailHeaderItemLabel>
                <s.NewEmailHeaderInput />
              </s.NewEmailHeaderItem>
              <s.NewEmailDivider />
            </s.NewEmailHeader>

            <s.NewEmailTextArea />
          </s.NewEmail>
        </s.NewEmailTouchableWithoutFeedback>
      </s.NewEmailKeyboardAvoidingView>
    </Modal>
  );
};

export default NewEmail;
