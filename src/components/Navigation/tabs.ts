import Chat from 'screens/Chat';
import Call from 'screens/Call';
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
];

export default tabs;
