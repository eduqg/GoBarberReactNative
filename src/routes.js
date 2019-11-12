import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

// Colocar uma arrow function para receber um parâmetro que diz se está logado
// Deste modo, é uma função que retorna um componente
export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              // Para que o teclado fique em cima na bottom bar
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              // fundo da tab bar
              style: {
                backgroundColor: '#8d41a8',
                borderTopColor: '#8d41a8',
                borderBottomColor: '#8d41a8',
                borderBottomWidth: 5,
                borderTopWidth: 5,
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
