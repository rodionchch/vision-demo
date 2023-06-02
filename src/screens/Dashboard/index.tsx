import React from 'react';

import useDashboard from './useDashboard';

import * as s from './styles';

const Dashboard = () => {
  const {index, setIndex, routes, renderScene, onSetDashboard} = useDashboard();

  return (
    <s.BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTouchable={({route, onPress, children}) => {
        return (
          <s.BottomNavigationButton>
            <s.BottomNavigationTouchable
              disabled={route.disabled}
              onPress={() => {
                if (!route?.disabled) {
                  onSetDashboard(route?.title === 'SMS' ? 'Sms' : route?.title);
                  onPress();
                }
              }}>
              {children}
            </s.BottomNavigationTouchable>
          </s.BottomNavigationButton>
        );
      }}
    />
  );
};

export default Dashboard;
