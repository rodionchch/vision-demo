import {useAppDispatch} from 'store/hooks';

const useSmsRoot = () => {
  const tabsAll = [
    {key: '0', title: 'Conversations'},
    {key: '1', title: 'All Unread'},
    {key: '2', title: 'All Favorites'},
    {key: '3', title: 'All Trash'},
  ];
  const tabs = [
    {key: '0', title: 'Conversations'},
    {key: '1', title: 'Unread'},
    {key: '2', title: 'Favorites'},
    {key: '3', title: 'Trash'},
  ];

  return {tabsAll, tabs};
};

export default useSmsRoot;
