import React from 'react';

import List from 'components/List';

type FoldersProps = {
  title?: string;
  data: {
    id: number;
    title: string;
    icon?: string;
    count?: number;
  }[];
};

const Folders: React.FC<FoldersProps> = ({title: headerTitle, data}) => {
  return <List title={headerTitle} data={data} />;
};

export default Folders;
