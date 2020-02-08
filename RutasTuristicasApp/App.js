import React from 'react';
import { Text } from 'react-native';

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

        <Text>El buscador</Text>
        <Text>Categorias</Text>
        
        <ListaCiudades data={this.state.ciudadesRecomendadas} />
        <SuggestionList data={this.state.lugaresRecomendados} />
      </Home>
    );
  }

};

export default App;
