import React from 'react';
import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import Avatar from 'components/Avatar';
import {getIcon} from '../Icon';
import menu from './menu';

import * as s from './styles';

export const getDrawerContent = () => <DrawerContent />;

const DrawerContent = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <s.Drawer>
      <s.DrawerUserInfo>
        <Avatar label="R" />
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
                  const isDashboard = name === 'Sms' || name === 'Mail';

                  let route: any = {
                    name,
                    params: {fromDrawer: true},
                  };

                  if (isDashboard) {
                    route = {
                      name: 'Dashboard',
                      params: {
                        dashboard: name,
                        fromDrawer: true,
                      },
                    };
                  }

                  navigation.dispatch(
                    CommonActions.reset({
                      index: 1,
                      routes: [route],
                    }),
                  );

                  navigation.dispatch(DrawerActions.toggleDrawer());
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
