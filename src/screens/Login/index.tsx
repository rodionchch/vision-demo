import React from 'react';

import CodeDots from 'components/Code/Dots';
import Code from 'components/Code';

import * as s from './styles';
import useLogin from './useLogin';

const Login = () => {
  const {PIN, onFaceId, onChangeCode, onBackspace} = useLogin();

  return (
    <s.Login>
      <s.LoginLogo />
      <s.LoginText variant={'titleMedium'}>Please enter your PIN</s.LoginText>
      <CodeDots length={PIN?.length} />
      <Code
        onFaceId={onFaceId}
        onChange={onChangeCode}
        onBackspace={onBackspace}
      />
    </s.Login>
  );
};

export default Login;
