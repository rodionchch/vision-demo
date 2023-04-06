import React from 'react';
import {Menu as PaperMenu} from 'react-native-paper';

export type ContextualMenuCoord = {x: number; y: number};

type MenuProps = {
  menu: {title: string; icon: string}[];
  visible: boolean | {id: number};
  toggleMenu: () => void;
  contextualMenuCoord: ContextualMenuCoord;
};

const Menu: React.FC<MenuProps> = ({
  menu,
  visible,
  toggleMenu,
  contextualMenuCoord,
}) => {
  return (
    <PaperMenu
      visible={!!visible}
      onDismiss={toggleMenu}
      anchor={contextualMenuCoord}>
      {menu?.map(({title, icon}, index) => (
        <PaperMenu.Item
          key={`${title}-${index}`}
          leadingIcon={icon}
          onPress={toggleMenu}
          title={title}
        />
      ))}
    </PaperMenu>
  );
};

export default Menu;
