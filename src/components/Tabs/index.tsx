import React, {ComponentType, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {MD3Colors} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';

type TabsProps = {
  tabs: {
    key: string;
    title: string;
  }[];
  component: ComponentType<unknown>;
};

const getRenderScene = ({tabs, component}: TabsProps) => {
  const sceneMap: {[key: string]: ComponentType<unknown>} = {};

  tabs?.forEach(({key}: {key: string}) => {
    sceneMap[key] = component;
  });

  return SceneMap(sceneMap);
};

const Tabs: React.FC<TabsProps> = ({tabs, component}) => {
  const layout = useWindowDimensions();
  const {params} = useRoute<NavigationType>();

  const [index, setIndex] = useState(params?.folder || 0);
  const [routes] = useState(tabs);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={getRenderScene({tabs, component})}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          bounces
          scrollEnabled
          tabStyle={{width: 'auto'}}
          indicatorStyle={{backgroundColor: MD3Colors.secondary50}}
          style={{backgroundColor: 'transparent'}}
        />
      )}
    />
  );
};

export default Tabs;
