import CallScreen from 'screens/CallScreen';
import ChatScreen from 'screens/ChatScreen';
import Sms from 'screens/Sms';
import MailScreenRoot from 'screens/MailScreen';

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
    name: 'MailRoot',
    label: 'Mail',
    icon: 'email',
    component: MailScreenRoot,
  },
  {
    name: 'Sms',
    label: 'SMS',
    icon: 'chat-processing',
    component: Sms,
  },
];

export default tabs;
