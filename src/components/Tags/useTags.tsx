import {useCallback, useMemo, useRef, useState} from 'react';
import {GestureResponderEvent, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import NavigationType from 'types/NavigationType';
import {ContextualMenuCoord} from 'components/Menu';
import Edit from 'components/Edit';
import Info from 'components/Info';
import {MenuEnum} from './menu';

const useTags = () => {
  const {navigate} = useNavigation<NavigationType>();
  const [contextualMenuCoord, setContextualMenuCoor] =
    useState<ContextualMenuCoord>({x: 0, y: 0});
  const modalRef = useRef<BottomSheetModal>(null);
  const [menuVisible, setMenuVisible] = useState<boolean | {id: number}>(false);

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

  const onLongPress = (event: GestureResponderEvent, tag: {id: number}) => {
    const {nativeEvent} = event;

    setContextualMenuCoor({
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    });
    setMenuVisible(tag);
  };

  const toggleMenu = () => setMenuVisible(!menuVisible);

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
    contextualMenuCoord,
    onLongPress,
    toggleMenu,
    onPressAccordion,
    menuVisible,
    expanded,
    onPressMenu,
    modalRef,
    modal,
  };
};

export default useTags;
