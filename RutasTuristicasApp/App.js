import React from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

const App: () => React$Node = () => {
  return (
    <Home>
      <Header>
        <Text style={{color: 'white'}}>Ser o no ser</Text>
      </Header>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <Text>Sugerencias</Text>
    </Home>
  );
};

export default App;
