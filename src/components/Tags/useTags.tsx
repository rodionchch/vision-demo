import {useCallback, useMemo, useRef, useState} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import NavigationType from 'types/NavigationType';
import Edit from 'components/Edit';
import Info from 'components/Info';
import {MenuEnum} from './menu';

const useTags = () => {
  const {navigate} = useNavigation<NavigationType>();
  const modalRef = useRef<BottomSheetModal>(null);

  const [expanded, setExpanded] = useState([0]);
  const [showModal, setShowModal] = useState<MenuEnum | null>(null);

  const modalData = useMemo(
    () => ({
      [MenuEnum.Edit]: {
        component: <Edit />,
        title: 'TOKARCHUK ANDREI',
        actions: [
          {
            label: 'Cancel',
            onPress: () => {
              Keyboard.dismiss();
              modalRef.current?.close();
            },
          },
          {
            label: 'Done',
            onPress: () => {
              Keyboard.dismiss();
              modalRef.current?.close();
            },
          },
        ],
      },
      [MenuEnum.Info]: {
        component: <Info />,
        title: 'TOKARCHUK ANDREI',
        actions: [
          {},
          {
            label: 'Done',
            onPress: () => {
              modalRef.current?.close();
            },
          },
        ],
      },
    }),
    [],
  );

  const modal = showModal && modalData?.[showModal];

  const onPressAccordion = (index: number) => {
    const expandedSet = new Set(expanded);
    if (expandedSet.has(index)) {
      expandedSet.delete(index);
    } else {
      expandedSet.add(index);
    }
    setExpanded(Array.from(expandedSet));
  };

  const onShowModal = useCallback(
    (menuItem: MenuEnum) => {
      setShowModal(menuItem);
      modalRef.current?.present();
    },
    [setShowModal],
  );

  const onPressMenu = (menuItem: MenuEnum) => {
    switch (menuItem) {
      case MenuEnum.Edit:
      case MenuEnum.Info:
        onShowModal(menuItem);
    }
  };

  return {
    navigate,
    onPressAccordion,
    expanded,
    onPressMenu,
    modalRef,
    modal,
  };
};

export default useTags;
