import {useRoute} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';

const useSmsList = () => {
  const {params} = useRoute<NavigationType>();

  return {
    params,
  };
};

export default useSmsList;
