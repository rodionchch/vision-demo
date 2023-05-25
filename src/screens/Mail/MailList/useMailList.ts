import {useRoute} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';

const useMailList = () => {
  const {params} = useRoute<NavigationType>();

  return {
    params,
  };
};

export default useMailList;
