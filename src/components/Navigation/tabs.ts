import CallScreen from 'screens/CallScreen';
import ChatScreen from 'screens/ChatScreen';
import SmsScreenRoot from 'screens/SmsScreen';
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
    name: 'SmsRoot',
    label: 'SMS',
    icon: 'chat-processing',
    component: SmsScreenRoot,
  },
];

export default tabs;
