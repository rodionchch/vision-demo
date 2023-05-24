const useSms = () => {
  const tabsAll = [
    {key: '0', title: 'Conversations', icon: 'chat'},
    {key: '1', title: 'All Unread', icon: 'email-mark-as-unread'},
    {key: '2', title: 'All Favorites', icon: 'heart'},
    {key: '3', title: 'All Trash', icon: 'delete'},
  ];
  const tabs = [
    {key: '0', title: 'Conversations', icon: 'chat'},
    {key: '1', title: 'Unread', icon: 'email-mark-as-unread'},
    {key: '2', title: 'Favorites', icon: 'heart'},
    {key: '3', title: 'Trash', icon: 'delete'},
  ];

  return {tabsAll, tabs};
};

export default useSms;
