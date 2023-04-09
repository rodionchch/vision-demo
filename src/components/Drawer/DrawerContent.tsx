import React from 'react';
import {useNavigation} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import {getIcon} from '../Icon';
import menu from './menu';

import * as s from './styles';

export const getDrawerContent = () => <DrawerContent />;

const DrawerContent = () => {
  const {navigate} = useNavigation<NavigationType>();

  return (
    <s.Drawer>
      <s.DrawerUserInfo>
        <s.DrawerAvatarText label="R" />
        <s.DrawerTitle>Rodion Chegodaev</s.DrawerTitle>
      </s.DrawerUserInfo>

      {menu?.map((section, index) => (
        <s.DrawerSection key={index} showDivider={index + 1 < menu?.length}>
          {section?.map(({name, label, icon, disabled}, index) => (
            <s.DrawerItem
              key={`${name}-${index}`}
              icon={props => getIcon(icon, props)}
              label={label || name}
              onPress={() => {
                if (!disabled) {
                  navigate(name);
                }
              }}
              disabled={disabled}
            />
          ))}
        </s.DrawerSection>
      ))}
    </s.Drawer>
  );
};

export default DrawerContent;
