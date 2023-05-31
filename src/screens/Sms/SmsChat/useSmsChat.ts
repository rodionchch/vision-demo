import {useRef, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';
import moment from 'moment';

const data = [
  {id: 0, date: 'Wed, 17 May, 13:08'},
  {
    id: 1,
    message:
      'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  },
  {
    id: 2,
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 3,
    message:
      'Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {id: 4, date: 'Yesterday 15:08'},
  {
    id: 5,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,
    message:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
    me: true,
  },
];

const useSmsChat = () => {
  const {params} = useRoute<NavigationType>();
  const [messages, setMessages] = useState(params?.id ? data : []);
  const [message, setMessage] = useState('');
  const dateRefCount = useRef(0);

  const onChange = (text: string) => {
    setMessage(text);
  };

  const onSend = () => {
    let m = [];
    const date = moment().format('HH:ss');
    if (!dateRefCount.current) {
      m = [
        ...messages,
        {id: messages?.length, date: `Today ${date}`},
        {id: messages?.length + 1, message, me: true},
      ];
      dateRefCount.current = 1;
    } else {
      m = [...messages, {id: messages?.length, message, me: true}];
    }
    setMessages(m);
    setMessage('');
  };

  return {params, message, messages, onChange, onSend};
};

export default useSmsChat;
