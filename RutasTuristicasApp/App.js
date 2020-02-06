import React from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/sections/containers/SuggestionList';

import API from './utils/API';

class App extends React.Component {

  state = {
    data : []
  }

  async componentDidMount(){

    const api = new API()
    const data = await api.getLugarPorZona(3)

    this.setState({
      data: data.data
    })

  }

  render(){

    return (
      <Home>
        <Header>
        <Text style={{color: 'white'}}>Iniciar sesión</Text>
        </Header>
{/* 
        <Text>El buscador</Text>
        <Text>Categorias</Text> */}
        <SuggestionList data={this.state.data} />
      </Home>
    );
  }

};

export default App;
