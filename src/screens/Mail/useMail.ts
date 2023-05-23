const useMail = () => {
  const tabsAll = [
    {key: '0', title: 'All Inbox'},
    {key: '1', title: 'All Unread'},
    {key: '2', title: 'All Sent'},
    {key: '3', title: 'All Favorites'},
    {key: '4', title: 'All Trash'},
  ];
  const tabs = [
    {key: '0', title: 'Inbox'},
    {key: '1', title: 'Unread'},
    {key: '2', title: 'Sent'},
    {key: '3', title: 'Favorites'},
    {key: '4', title: 'Trash'},
  ];

  return {
    tabsAll,
    tabs,
  };
};

export default useMail;
