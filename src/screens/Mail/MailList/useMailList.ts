import {useState} from 'react';
import {GestureResponderEvent} from 'react-native/types';
import {useRoute} from '@react-navigation/native';
import {ContextualMenuCoord} from 'components/Menu';
import NavigationType from 'types/NavigationType';

const useMailList = () => {
  const {params} = useRoute<NavigationType>();
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
    params,
    toggleMenu,
    menuVisible,
    onLongPress,
    contextualMenuCoord,
  };
};

export default useMailList;
