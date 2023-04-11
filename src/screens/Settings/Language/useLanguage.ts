import {useState} from 'react';

export enum LanguageEnum {
  English,
}

const useLanguage = () => {
  const [checked, setChecked] = useState<LanguageEnum | null>(
    LanguageEnum.English,
  );

  const languageData = [
    {
      label: 'English',
      checked: checked === LanguageEnum.English,
      onPress: () => {
        setChecked(+LanguageEnum.English);
      },
    },
  ];
  return [languageData];
};

export default useLanguage;
