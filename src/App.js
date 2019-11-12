import React from 'react';
import { useSelector } from 'react-redux';

// Agora meu router virou create Route. Pode receber um parâmetro.
import createRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}
