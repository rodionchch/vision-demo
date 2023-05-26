import {useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import NavigationType from 'types/NavigationType';

const useMailList = () => {
  const {params} = useRoute<NavigationType>();
  const modalRef = useRef<BottomSheetModal>(null);

  return {
    params,
    modalRef,
  };
};

export default useMailList;
