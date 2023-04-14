import React, {useState} from 'react';
import {GestureResponderEvent} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import Menu, {ContextualMenuCoord} from 'components/Menu';
import menu from './menu';

import * as s from './styles';

type TagsProps = {
  data: {
    id: number;
    tag: string;
    icon?: string;
    items?: {
      id: number;
      name: string;
      phone?: string;
      icon?: string;
    }[];
  }[];
  tabs: {key: string; title: string}[];
  screen?: string;
};

const getTagIcon = (icon?: string) => () =>
  icon && <s.TagsAccordionIcon icon={icon} />;

const getItemIcon = (icon?: string) => () =>
  icon && <s.TagsItemIcon icon={icon} />;

const getCount = (count?: number) => () =>
  count !== undefined && <s.TagsItemText>{count}</s.TagsItemText>;

const Tags: React.FC<TagsProps> = ({data, tabs, screen}) => {
  const {navigate} = useNavigation<NavigationType>();
  const route = useRoute();
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

  return (
    <>
      <Menu
        menu={menu}
        visible={menuVisible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
      />

      <s.Tags>
        {data?.map(({id, tag, icon, items}, index) => (
          <s.TagsAccordion
            key={id}
            title={tag}
            expanded={expanded.includes(index)}
            onPress={() => {
              onPressAccordion(index);
            }}
            left={getTagIcon(icon)}>
            {items?.map(({id: itemId, name, phone, icon: itemIcon}) => (
              <s.TagsTouchable
                key={itemId}
                onPress={() => {
                  if (screen) {
                    navigate(screen, {
                      screen: `${screen}List`,
                      params: {
                        tabs,
                        name,
                        phone,
                      },
                    });
                  }
                }}
                onLongPress={event => {
                  onLongPress(event, {id: itemId});
                }}
                selected={
                  typeof menuVisible === 'object' && menuVisible.id === itemId
                }>
                <s.TagsItem
                  title={name}
                  description={phone}
                  left={getItemIcon(itemIcon)}
                  right={getCount(0)}
                />
              </s.TagsTouchable>
            ))}
          </s.TagsAccordion>
        ))}
      </s.Tags>
    </>
  );
};

export default Tags;
