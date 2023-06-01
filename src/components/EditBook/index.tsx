import React from 'react';
import * as s from './styles';

type EditBook = {
  book: string;
  setBook: (book: string) => void;
};

const EditBook: React.FC<EditBook> = ({book, setBook}) => {
  return (
    <s.EditBook>
      <s.EditBookInput
        label="Name"
        value={book}
        onChangeText={name => setBook(name)}
      />
    </s.EditBook>
  );
};

export default EditBook;
