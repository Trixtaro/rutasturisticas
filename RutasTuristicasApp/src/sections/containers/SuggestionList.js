import React from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import Lugar from '../components/Lugar';

class SuggestionList extends React.Component{

    state = {
        list: [
            { key: '1', nombre: 'Portoviejo', descripcion: 'Ciudad de Portoviejo' },
            { key: '2', nombre: 'Manta', descripcion: 'Ciudad de Manta'},
        ]
    }

    renderEmpty = () => <Empty text="No hay sugerencias" />
    renderSeparator = () => <Separator />
    renderLugar = ({item}) => <Lugar lugar={{
            nombre: item.nombre,
            descripcion: item.descripcion
        }}/>

    render(){

        return (
            <Layout title="Lugares sugeridos">
                <FlatList 
                    data={this.state.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={this.renderLugar}
                />
            </Layout>
        );
    }

};

export default SuggestionList;