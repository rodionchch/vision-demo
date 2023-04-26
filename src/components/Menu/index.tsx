import React from 'react';

import {MenuEnum} from 'components/Tags/menu';
import * as s from './styles';

export type ContextualMenuCoord = {x: number; y: number};

type MenuProps = {
  menu: {title: string; icon: string}[];
  visible: boolean | {id: number};
  toggleMenu: () => void;
  contextualMenuCoord: ContextualMenuCoord;
  onPress?: (menuItem: MenuEnum) => void;
};

const Menu: React.FC<MenuProps> = ({
  menu,
  visible,
  toggleMenu,
  contextualMenuCoord,
  onPress,
}) => {
  return (
    <s.Menu
      visible={!!visible}
      onDismiss={toggleMenu}
      anchor={contextualMenuCoord}>
      {menu?.map(({title, icon}, index) => (
        <s.MenuItem
          key={`${title}-${index}`}
          leadingIcon={icon}
          onPress={() => {
            toggleMenu();
            onPress?.(title);
          }}
          title={title}
        />
      ))}
    </s.Menu>
  );
};

export default Menu;
