import {useState} from 'react';
import {GestureResponderEvent} from 'react-native/types';
import {ContextualMenuCoord} from 'components/Menu';

const useMenu = () => {
  const [menuVisible, setMenuVisible] = useState<boolean | {id: number}>(false);
  const [contextualMenuCoord, setContextualMenuCoor] =
    useState<ContextualMenuCoord>({x: 0, y: 0});

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const onLongPress = (event: GestureResponderEvent, id: number) => {
    const {nativeEvent} = event;

    setContextualMenuCoor({
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    });
    setMenuVisible({id});
  };

  return {
    toggleMenu,
    menuVisible,
    onLongPress,
    contextualMenuCoord,
  };
};

export default useMenu;
