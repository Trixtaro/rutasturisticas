import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/sections/containers/SuggestionList';
import ListaCiudades from './src/sections/containers/ListaCiudades';

import portoviejo from './assets/portoviejo.jpg';
import manta from './assets/manta.jpg';
import montecristi from './assets/montecristi.jpg';

import Api from './utils/API';

class App extends React.Component {

  state = {
    ciudadesRecomendadas: [
      {
        nombre: "Portoviejo",
        foto: 1,
        descripcion: "La capital de los manabitas."
      },
      {
        nombre: "Manta",
        foto: 2,
        descripcion: "Principal puerto atunero del mundo."
      },
      {
        nombre: "Montecristi",
        foto: 3,
        descripcion: "La cuna de Eloy Alfaro, y artesanias como el sombrero de paja toquilla."
      }
    ]
  }

  async componentDidMount(){

    const lugaresRecomendados = await Api.getLugarPorZona(3)

    this.setState({
      ...this.state,
      lugaresRecomendados: lugaresRecomendados.data,
    })

  }

  render(){

    return (
      <Home>
        <Header>
        <Text style={{color: 'white'}}></Text>
        </Header>

        <ImageBackground
          source={require('./assets/bg-2.png')}
          style={styles.container}
          >
          {/* <Text>El buscador</Text>
          <Text>Categorias</Text> */}

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
