import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Tabs as PaperTabs, TabScreen} from 'react-native-paper-tabs';
import NavigationType from 'types/NavigationType';

type TabsProps = {
  tabs: {
    key: string;
    title: string;
    icon?: string;
  }[];
  children?: React.ReactNode;
};

const Tabs: React.FC<TabsProps> = ({tabs, children}) => {
  const {params} = useRoute<NavigationType>();

  return (
    <PaperTabs
      defaultIndex={params?.folder || 0}
      style={{backgroundColor: 'transparent'}}
      dark={true}
      mode="scrollable"
      showLeadingSpace={false}>
      {tabs?.map(tab => (
        <TabScreen
          key={tab.key}
          label={tab.title}
          // icon={tab?.icon}
        >
          {children}
        </TabScreen>
      ))}
    </PaperTabs>
  );
};

export default Tabs;
