import React from 'react';
import { Image } from 'react-native';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} alt="logo" />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite completo"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            placeholder="Sua senha secreta"
            secureTextEntry
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
