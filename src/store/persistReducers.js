import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      // key = para que apenas essa aplicação tenha o estado
      key: 'gobarber',
      // storage usa localStorage para web e asyncStorage para mobile
      storage,
      // whitelist = armazenar reducers que preciso manter
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
