import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/HorizontalSeparator';
import Lugar from '../components/Lugar';

class ListaCiudades extends React.Component{

    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias" />
    renderSeparator = () => <Separator color="green" />
    renderLugar = ({item}) => <Lugar lugar={item}/>

    render(){
        return (
            <Layout title="Ciudades más visitadas" color={'#176859'}>
                <FlatList 
                    horizontal
                    keyExtractor={this.keyExtractor}
                    data={this.props.data}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={this.renderLugar}
                />
            </Layout>
        );
    }

}

export default ListaCiudades;