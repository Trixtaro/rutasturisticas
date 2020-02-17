import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { connect } from 'react-redux';

import * as lugaresActions from '../../../redux/actions/lugaresActions';

const { seleccionarZona : guardarIdZonaSeleccionada } = lugaresActions

import API from '../../../utils/API';

class Buscador extends React.Component{

    state = {
        zonas : [],
        texto: '',
        idZona: ''
    }

    keyExtractor = (item) => item.Id.toString()
    
    
    obtenerZonasFiltradas(){
        const filtrarZonas = (item) => item.Lugar.indexOf(this.state.texto) != -1

        if(!this.state.texto)
            return [];
        
        const zonasFiltradas = this.state.zonas.filter(filtrarZonas)
        
        return zonasFiltradas
    }

    seleccionarZona = (id) => {
        this.setState({
            ...this.state,
            idZona: id
        })

        this.props.guardarIdZonaSeleccionada(id)
        console.log(this.props.zona)
    }

    async componentDidMount () {
        const zonas = await API.getZonasPorNombre();

        this.setState({
            ...this.state,
            zonas
        })

    }

    render(){
        const zonas = this.obtenerZonasFiltradas();

        return(
            <View style={styles.container}>
                <View style={styles.autocompleteContainer}>
                    <Autocomplete 
                        data={zonas}
                        renderItem={( { item } ) => (
                            <TouchableOpacity onPress={() =>  
                                this.seleccionarZona(item.Id)
                            }>
                                <Text style={styles.itemText}>{ item.Lugar }</Text>
                            </TouchableOpacity>
                        )}
                        defaultValue={''}
                        onChangeText={texto => this.setState({ texto })}
                        keyExtractor={this.keyExtractor}
                        placeholder={'Busca tus lugares preferidos...'}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        height: 70,
    },
    autocompleteContainer: {
        flex: 1,
        left: 5,
        position: 'absolute',
        right: 5,
        top: 10,
        zIndex: 1
    },
    itemText: {
        fontSize: 15,
        margin: 2
    },
  });

const mapStateToProps = ({ lugaresReducer }) => lugaresReducer

const mapDispatchToProps = {
    guardarIdZonaSeleccionada
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);