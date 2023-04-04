import CallScreen from 'screens/CallScreen';
import ChatScreen from 'screens/ChatScreen';
import MailScreen from 'screens/MailScreen';
import SmsScreen from 'screens/SmsScreen';

const tabs = [
  {
    name: 'Chat',
    label: 'Chat',
    icon: 'forum',
    component: ChatScreen,
    disabled: true,
  },
  {
    name: 'Call',
    label: 'Call',
    icon: 'phone',
    component: CallScreen,
    disabled: true,
  },
  {
    name: 'Mail',
    label: 'Mail',
    icon: 'email',
    component: MailScreen,
  },
  {
    name: 'Sms',
    label: 'SMS',
    icon: 'chat-processing',
    component: SmsScreen,
  },
];

export default tabs;
