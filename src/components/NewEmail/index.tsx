import React from 'react';
import * as s from './styles';

const NewEmail = () => {
  return (
    <s.NewEmail>
      <s.NewEmailHeader>
        <s.NewEmailHeaderItem>
          <s.NewEmailHeaderItemLabel>To:</s.NewEmailHeaderItemLabel>
          <s.NewEmailHeaderInput />
        </s.NewEmailHeaderItem>
        <s.NewEmailDivider />
        <s.NewEmailHeaderItem>
          <s.NewEmailHeaderItemLabel>From:</s.NewEmailHeaderItemLabel>
          <s.NewEmailHeaderInput />
        </s.NewEmailHeaderItem>
        <s.NewEmailDivider />

        <s.NewEmailHeaderItem>
          <s.NewEmailHeaderItemLabel>CC:</s.NewEmailHeaderItemLabel>
          <s.NewEmailHeaderInput />
        </s.NewEmailHeaderItem>
        <s.NewEmailDivider />

        <s.NewEmailHeaderItem>
          <s.NewEmailHeaderItemLabel>Subject:</s.NewEmailHeaderItemLabel>
          <s.NewEmailHeaderInput />
        </s.NewEmailHeaderItem>
        <s.NewEmailDivider />
      </s.NewEmailHeader>

      <s.NewEmailTextArea />
    </s.NewEmail>
  );
};

export default NewEmail;
