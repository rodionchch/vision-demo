import {useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import NavigationType from 'types/NavigationType';

const useMailBook = () => {
  const {setOptions} = useNavigation();
  const {params} = useRoute<NavigationType>();
  const {navigate} = useNavigation<NavigationType>();

  useEffect(() => {
    setOptions({animation: params?.fromDrawer ? 'none' : 'default'});
  });

  const modalRef = useRef<BottomSheetModal>(null);
  const [book, setBook] = useState('');

  const addBook = (bookName: string) => {
    setBook(bookName);
  };

  return {navigate, modalRef, book, addBook};
};

export default useMailBook;
