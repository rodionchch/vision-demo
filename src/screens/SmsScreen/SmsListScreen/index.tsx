import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {MD3Colors} from 'react-native-paper';
import List from 'components/List';
import data from '../data';

const SmsList = () => (
  <ScrollView>
    <List data={data} />
  </ScrollView>
);

const renderScene = SceneMap({
  0: SmsList,
  1: SmsList,
  2: SmsList,
  3: SmsList,
});

const SmsListScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '0', title: 'Conversations'},
    {key: '1', title: 'All Unread'},
    {key: '2', title: 'All Favorites'},
    {key: '3', title: 'All Trash'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
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

export default SmsListScreen;
