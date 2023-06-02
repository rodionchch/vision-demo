import React from 'react';

import Menu from 'components/Menu';
import Modal, {ModalActions} from 'components/Modal';
import useTags from './useTags';
import useMenu from 'hooks/useMenu';
import menu from './menu';

import * as s from './styles';
import {useTheme} from 'react-native-paper';

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

const getText = (text?: number) => () =>
  text !== undefined && <s.TagsItemText>{text}</s.TagsItemText>;

const Tags: React.FC<TagsProps> = ({data, tabs, screen}) => {
  const theme = useTheme();

  const {navigate, onPressAccordion, expanded, onPressMenu, modalRef, modal} =
    useTags();

  const {toggleMenu, menuVisible, onLongPress, contextualMenuCoord} = useMenu();

  return (
    <>
      <Menu
        menu={menu}
        visible={menuVisible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
        onPress={onPressMenu}
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
                theme={theme}
                onPress={() => {
                  if (screen) {
                    navigate(`${screen}List`, {
                      tabs,
                      name,
                      phone,
                    });
                  }
                }}
                onLongPress={event => {
                  onLongPress(event, itemId);
                }}
                selected={
                  typeof menuVisible === 'object' && menuVisible.id === itemId
                }>
                <s.TagsItem
                  title={name}
                  description={phone}
                  left={getItemIcon(itemIcon)}
                  right={getText(0)}
                />
              </s.TagsTouchable>
            ))}
          </s.TagsAccordion>
        ))}
      </s.Tags>

      <Modal
        modalRef={modalRef}
        title={modal?.title}
        actions={modal?.actions as ModalActions}>
        {modal?.component as React.ReactNode}
      </Modal>
    </>
  );
};

export default Tags;
