// Arquivo criado para index.js não ficar muito grande.
// Criado para encapsular parte do reactotron redux e saga.
import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  // Para reactotron em ambiente de desenvolvimento.
  // Cadastro de enhancer do redux junto com os middlewares.
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
