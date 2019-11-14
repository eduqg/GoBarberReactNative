import React from 'react';
import { View } from 'react-native';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function SelectDateTime() {
  return <Background />;
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  // headerLeft: () => (
  //   <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
  //     <Icon name="chevron-left" size={20} color="#fff" />
  //   </TouchableOpacity>
  // ),
});
