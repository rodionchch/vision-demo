import Call from 'screens/Call';
import Chat from 'screens/Chat';
import Sms from 'screens/Sms';
import Mail from 'screens/Mail';

const tabs = [
  {
    name: 'Chat',
    label: 'Chat',
    icon: 'forum',
    component: Chat,
    disabled: true,
  },
  {
    name: 'Call',
    label: 'Call',
    icon: 'phone',
    component: Call,
    disabled: true,
  },
  {
    name: 'Mail',
    label: 'Mail',
    icon: 'email',
    component: Mail,
  },
  {
    name: 'Sms',
    label: 'SMS',
    icon: 'chat-processing',
    component: Sms,
  },
];

export default tabs;
