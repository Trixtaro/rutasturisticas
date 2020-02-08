import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/sections/containers/SuggestionList';
import ListaCiudades from './src/sections/containers/ListaCiudades';

import Api from './utils/API';

class App extends React.Component {

  state = {
    data : []
  }

  async componentDidMount(){

    const lugaresRecomendados = await Api.getLugarPorZona(3)

    this.setState({
      lugaresRecomendados: lugaresRecomendados.data,
      ciudadesRecomendadas: lugaresRecomendados.data
    })

  }

  render(){

    return (
      <Home>
        <Header>
        <Text style={{color: 'white'}}>Iniciar sesión</Text>
        </Header>

        <ImageBackground
          source={require('./assets/bg-2.png')}
          style={styles.container}
          >
          <Text>El buscador</Text>
          <Text>Categorias</Text>

          <ListaCiudades data={this.state.ciudadesRecomendadas} />
          <SuggestionList data={this.state.lugaresRecomendados} />
        </ImageBackground>

      </Home>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
