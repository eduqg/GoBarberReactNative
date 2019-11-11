import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>Login</Text>
      <Input style={{ marginTop: 30 }} icon="call" placeholder="Digite" />
      <Button>Entrar</Button>
    </Background>
  );
}
