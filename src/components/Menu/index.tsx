import React from 'react';

import * as s from './styles';

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
    <s.Menu
      visible={!!visible}
      onDismiss={toggleMenu}
      anchor={contextualMenuCoord}>
      {menu?.map(({title, icon}, index) => (
        <s.MenuItem
          key={`${title}-${index}`}
          leadingIcon={icon}
          onPress={toggleMenu}
          title={title}
        />
      ))}
    </s.Menu>
  );
};

export default Menu;
