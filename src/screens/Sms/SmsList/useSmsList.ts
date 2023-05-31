import {useNavigation, useRoute} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';

const useSmsList = () => {
  const {params} = useRoute<NavigationType>();
  const {navigate} = useNavigation<NavigationType>();

  return {
    params,
    navigate,
  };
};

export default useSmsList;
