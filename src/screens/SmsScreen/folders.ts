const getFolders = (onPress: () => void) => {
  const folders = [
    {
      id: 0,
      title: 'Conversations',
      icon: 'chat',
      text: 659,
      onPress,
    },
    {
      id: 1,
      title: 'All Unread',
      icon: 'email-mark-as-unread',
      text: 653,
      onPress,
    },
    {
      id: 2,
      title: 'All Favorites',
      icon: 'heart',
      text: 2,
      onPress,
    },
    {
      id: 3,
      title: 'All Trash',
      icon: 'delete',
      text: 0,
      onPress,
    },
  ];

  return folders;
};

export default getFolders;
