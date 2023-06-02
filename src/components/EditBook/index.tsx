import React from 'react';
import * as s from './styles';
import {useTheme} from 'react-native-paper';

type EditBook = {
  book: string;
  setBook: (book: string) => void;
};

const EditBook: React.FC<EditBook> = ({book, setBook}) => {
  const theme = useTheme();

  return (
    <s.EditBook>
      <s.EditBookInput
        label="Name"
        value={book}
        theme={theme}
        onChangeText={name => setBook(name)}
      />
    </s.EditBook>
  );
};

export default EditBook;
