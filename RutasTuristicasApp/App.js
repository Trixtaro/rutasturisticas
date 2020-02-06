import React from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

const App: () => React$Node = () => {
  return (
    <Home>
      <Header>
        <Text style={{color: 'white'}}>Iniciar sesión</Text>
      </Header>
      <Text>El buscador</Text>
      <Text>Categorias</Text>
      <Text>Sugerencias</Text>
    </Home>
  );
};

export default App;
