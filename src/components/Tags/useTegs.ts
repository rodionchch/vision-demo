import {useState} from 'react';
import {GestureResponderEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import {ContextualMenuCoord} from 'components/Menu';

const useTags = () => {
  const {navigate} = useNavigation<NavigationType>();
  const [contextualMenuCoord, setContextualMenuCoor] =
    useState<ContextualMenuCoord>({x: 0, y: 0});
  const [menuVisible, setMenuVisible] = useState<boolean | {id: number}>(false);

  const [expanded, setExpanded] = useState([0]);

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

  return {
    navigate,
    contextualMenuCoord,
    onLongPress,
    toggleMenu,
    onPressAccordion,
    menuVisible,
    expanded,
  };
};

export default useTags;
