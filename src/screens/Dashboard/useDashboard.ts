import {useEffect, useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import ChatScreen from 'screens/Chat';
import CallScreen from 'screens/Call';
import MailScreen from 'screens/Mail';
import SmsScreen from 'screens/Sms';
// import {useAppDispatch} from 'store/hooks';
// import {setDashboard} from 'store/appSlice';

enum Dashboard {
  Chat,
  Call,
  Mail,
  Sms,
}

const useDashboard = () => {
  const [index, setIndex] = useState(3);
  const route = useRoute<NavigationType>();
  const navigation = useNavigation<NavigationType>();
  // const dispatch = useAppDispatch();

  useEffect(() => {
    if (route?.params?.dashboard === 'Sms') {
      setIndex(Dashboard.Sms);
    } else if (route?.params?.dashboard === 'Mail') {
      setIndex(Dashboard.Mail);
    }
  }, [route?.params?.dashboard]);

  const [routes] = useState([
    {
      key: 'chat',
      title: 'Chat',
      focusedIcon: 'forum',
      unfocusedIcon: 'forum-outline',
      disabled: true,
      // badge: 3,
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
      title: 'SMS',
      focusedIcon: 'chat-processing',
      unfocusedIcon: 'chat-outline',
    },
  ]);

  const onSetDashboard = (dashboard: string) => {
    // dispatch(setDashboard(dashboard));
    navigation.setParams({dashboard});
  };

  const renderScene = BottomNavigation.SceneMap({
    chat: ChatScreen,
    call: CallScreen,
    mail: MailScreen,
    sms: SmsScreen,
  });

  return {index, setIndex, routes, renderScene, onSetDashboard};
};

export default useDashboard;
