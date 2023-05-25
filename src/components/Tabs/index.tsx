import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Tabs as PaperTabs, TabScreen} from 'react-native-paper-tabs';
import NavigationType from 'types/NavigationType';

type TabsProps = {
  tabs: {
    id: number;
    title: string;
    icon?: string;
    text?: string | number;
  }[];
  children: React.ReactNode | React.ReactNode[];
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
      {tabs?.map((tab, index) => (
        <TabScreen
          key={tab.id}
          label={tab.text ? `${tab.title} (${tab.text})` : tab.title}
          icon={tab?.icon}>
          {Array.isArray(children) ? children[index] : children}
        </TabScreen>
      ))}
    </PaperTabs>
  );
};

export default Tabs;
