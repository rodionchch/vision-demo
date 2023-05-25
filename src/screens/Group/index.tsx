import React from 'react';
import List from 'components/List';
import Menu from 'components/Menu';
import useMenu from 'hooks/useMenu';

import data from './data';
import menu from './menu';
import * as s from './styles';

type GroupProps = {};

const Group: React.FC<GroupProps> = () => {
  const {toggleMenu, menuVisible, onLongPress, contextualMenuCoord} = useMenu();

  return (
    <s.Group>
      <Menu
        menu={menu}
        visible={menuVisible}
        toggleMenu={toggleMenu}
        contextualMenuCoord={contextualMenuCoord}
      />
      <List data={data} onLongPress={onLongPress} />
    </s.Group>
  );
};

export default Group;
