import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      // key = para que apenas essa aplicação tenha o estado
      key: 'gobarber',
      // storage usa localStorage para web e asyncStorage para mobile
      storage: AsyncStorage,
      // whitelist = armazenar reducers que preciso manter
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
