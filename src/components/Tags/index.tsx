import React, {useState} from 'react';
import {GestureResponderEvent} from 'react-native';

import Menu, {ContextualMenuCoord} from 'components/Menu';
import menu from './menu';

import * as s from './styles';

type TagsProps = {
  data: {
    id: number;
    tag: string;
    items?: {
      id: number;
      name: string;
      phone?: string;
      icon?: string;
    }[];
  }[];
};

const getTagIcon = (icon?: string) => () =>
  icon && <s.TagsAccordionIcon icon={icon} />;

const getItemIcon = (icon?: string) => () =>
  icon && <s.TagsItemIcon icon={icon} />;

const getCount = (count?: number) => () =>
  count !== undefined && <s.TagsItemText>{count}</s.TagsItemText>;

const Tags: React.FC<TagsProps> = ({data}) => {
  const [contextualMenuCoord, setContextualMenuCoor] =
    useState<ContextualMenuCoord>({x: 0, y: 0});
  const [visible, setVisible] = useState<boolean | {id: number}>(false);

  const onLongPress = (event: GestureResponderEvent, tag: {id: number}) => {
    const {nativeEvent} = event;

    setContextualMenuCoor({
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    });
    setVisible(tag);
  };

  const toggleMenu = () => setVisible(!visible);

  return (
    <>
      <Menu
        menu={menu}
        visible={visible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
      />

      <s.Tags>
        {data?.map(({id, tag, icon, items}) => (
          <s.TagsAccordion key={id} title={tag} left={getTagIcon(icon)}>
            {items?.map(({id: itemId, name, phone, icon: itemIcon}) => (
              <s.TagsTouchable
                key={itemId}
                onPress={() => {}}
                onLongPress={event => {
                  onLongPress(event, {id: itemId});
                }}
                selected={typeof visible === 'object' && visible.id === itemId}>
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
