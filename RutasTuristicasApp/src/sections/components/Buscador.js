import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import API from '../../../utils/API';

class Buscador extends React.Component{

    state = {
        zonas : []
    }

    keyExtractor = (item) => item.Id.toString()

    filtrarZonas = (item) => item.Lugar.indexOf('Po') != -1

    async componentDidMount () {
        const zonas = await API.getZonasPorNombre();
        // this.setState({
        //     zonas
        // })
        const zonasFiltradas = zonas.filter(this.filtrarZonas)

        console.log(zonasFiltradas[0])
        this.setState({
            zonas : zonasFiltradas
        })

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.autocompleteContainer}>
                    <Autocomplete 
                        data={this.state.zonas}
                        renderItem={( { item } ) => (
                            <TouchableOpacity onPress={() => this.setState({ query: item })}>
                                <Text style={styles.itemText}>{ item.Lugar }</Text>
                            </TouchableOpacity>
                        )}
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

export default Buscador;