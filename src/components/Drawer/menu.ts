const menu = [
  [
    {
      name: 'Sms',
      label: 'SMS',
      icon: 'chat-processing',
    },
    {
      name: 'Mail',
      icon: 'email',
    },
    {
      name: 'Call',
      icon: 'phone',
      disabled: true,
    },
    {
      name: 'Chat',
      icon: 'forum',
      disabled: true,
    },
  ],
  [
    {
      name: 'PhoneBookRoot',
      label: 'PhoneBook',
      icon: 'book-open',
    },
    {
      name: 'MailBookRoot',
      label: 'MailBook',
      icon: 'email-multiple',
    },
  ],
  [
    {
      name: 'SettingsRoot',
      label: 'Settings',
      icon: 'cog',
    },
  ],
];

export default menu;
