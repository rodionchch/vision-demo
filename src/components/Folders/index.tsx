import React from 'react';

import * as s from './styles';
import {useNavigation} from '@react-navigation/native';

type FoldersProps = {
  title?: string;
  data: {
    id: number;
    title: string;
    icon?: string;
    count?: number;
  }[];
  screen?: string;
};

const getFoldersIcon = (icon?: string) => () =>
  icon && <s.FoldersItemIcon icon={icon} />;

const getText = (text?: number) => () =>
  text !== undefined && <s.FoldersItemText>{text}</s.FoldersItemText>;

const Folders: React.FC<FoldersProps> = ({
  title: headerTitle,
  data,
  screen,
}) => {
  const {navigate} = useNavigation();

  return (
    <s.Folders>
      {!!headerTitle && <s.FoldersHeader>{headerTitle}</s.FoldersHeader>}
      {data?.map(({id, title, icon, count}, index) => (
        <s.FoldersItem
          key={id || `${title}-${index}`}
          title={title}
          onPress={() => {
            if (screen) {
              navigate(`${screen}Root`, {
                screen: `${screen}List`,
                params: {
                  folder: id,
                  tabs: [
                    {key: '0', title: 'Conversations'},
                    {key: '1', title: 'All Unread'},
                    {key: '2', title: 'All Favorites'},
                    {key: '3', title: 'All Trash'},
                  ],
                },
              });
            }
          }}
          left={getFoldersIcon(icon)}
          right={getText(count)}
        />
      ))}
    </s.Folders>
  );
};

export default Folders;
