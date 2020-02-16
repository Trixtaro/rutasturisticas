import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';

import { Provider } from 'react-redux';
import { Store , Persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/sections/containers/SuggestionList';
import ListaCiudades from './src/sections/containers/ListaCiudades';
import Player from './src/player/container/Player';

import portoviejo from './assets/portoviejo.jpg';
import manta from './assets/manta.jpg';
import montecristi from './assets/montecristi.jpg';

import Api from './utils/API';

class App extends React.Component {

  async componentDidMount(){

    const lugaresRecomendados = await Api.getLugarPorZona(3)

    
  }

  render(){

    return (
      <Provider
        store={Store}
      >
      <PersistGate
        loading={<ActivityIndicator />} persistor={Persistor}
      >

      <Home>
        <Header>
        <Text style={{color: 'white'}}></Text>
        </Header>

        <ImageBackground
          source={require('./assets/bg-2.png')}
          style={styles.container}
          >

          <Text>Buscador</Text>
          <Player />

          <ListaCiudades />
          <SuggestionList />
        </ImageBackground>

      </Home>

      </PersistGate>
      </Provider>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
