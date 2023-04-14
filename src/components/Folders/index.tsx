import React from 'react';
import {useNavigation} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import * as s from './styles';

type FoldersProps = {
  title?: string;
  data: {
    id: number;
    title: string;
    icon?: string;
    count?: number;
  }[];
  screen?: string;
  tabs: {key: string; title: string}[];
};

const getFoldersIcon = (icon?: string) => () =>
  icon && <s.FoldersItemIcon icon={icon} />;

const getText = (text?: number) => () =>
  text !== undefined && <s.FoldersItemText>{text}</s.FoldersItemText>;

const Folders: React.FC<FoldersProps> = ({
  title: headerTitle,
  data,
  screen,
  tabs,
}) => {
  const {navigate} = useNavigation<NavigationType>();

  return (
    <s.Folders>
      {!!headerTitle && <s.FoldersHeader>{headerTitle}</s.FoldersHeader>}
      {data?.map(({id, title, icon, count}, index) => (
        <s.FoldersItem
          key={id || `${title}-${index}`}
          title={title}
          onPress={() => {
            if (screen) {
              navigate(screen, {
                screen: `${screen}List`,
                params: {
                  folder: id,
                  tabs,
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
