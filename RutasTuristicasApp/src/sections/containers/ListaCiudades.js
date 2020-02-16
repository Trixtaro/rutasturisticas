import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/HorizontalSeparator';
import Ciudad from '../components/Ciudad';

class ListaCiudades extends React.Component{

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

    keyExtractor = (item) => item.nombre.toString()
    renderEmpty = () => <Empty text="No hay sugerencias" />
    renderSeparator = () => <Separator color="green" />
    renderCiudad = ({item}) => <Ciudad ciudad={item}/>

    render(){
        return (
            <Layout title="Ciudades más visitadas" color={'#176859'}>
                <FlatList 
                    horizontal
                    keyExtractor={this.keyExtractor}
                    data={this.state.ciudadesRecomendadas}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={this.renderCiudad}
                />
            </Layout>
        );
    }

}

export default ListaCiudades;