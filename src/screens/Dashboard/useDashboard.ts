import {useEffect, useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import Chat from 'screens/Chat';
import Call from 'screens/Call';
import Mail from 'screens/Mail';
import Sms from 'screens/Sms';
import {useAppDispatch} from 'store/hooks';
import {setDashboard} from 'store/appSlice';

const useDashboard = () => {
  const [index, setIndex] = useState(3);
  const route = useRoute<NavigationType>();

  useEffect(() => {
    if (route?.params?.name === 'Sms') {
      setIndex(3);
    } else if (route?.params?.name === 'Mail') {
      setIndex(2);
    }
  }, [route?.params?.name]);

  const [routes] = useState([
    {
      key: 'chat',
      title: 'Chat',
      focusedIcon: 'forum',
      unfocusedIcon: 'forum-outline',
      disabled: true,
    },
    {
      key: 'call',
      title: 'Call',
      focusedIcon: 'phone',
      unfocusedIcon: 'phone-outline',
      disabled: true,
    },
    {
      key: 'mail',
      title: 'Mail',
      focusedIcon: 'email',
      unfocusedIcon: 'email-outline',
    },
    {
      key: 'sms',
      title: 'Sms',
      focusedIcon: 'chat-processing',
      unfocusedIcon: 'chat-outline',
      badge: 3,
    },
  ]);

  const dispatch = useAppDispatch();

  const onSetDashboard = (key: string) => {
    dispatch(setDashboard(key));
  };

  const renderScene = BottomNavigation.SceneMap({
    chat: Chat,
    call: Call,
    mail: Mail,
    sms: Sms,
  });

  return {index, setIndex, routes, renderScene, onSetDashboard};
};

export default useDashboard;
