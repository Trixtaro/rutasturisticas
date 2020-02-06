import React from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/SuggestionListLayout';

class SuggestionList extends React.Component{

    state = {
        list: [
            { key: '1', title: 'Rutas' },
            { key: '2', title: 'Turisticas'}
        ]
    }

    render(){
        return (
            <Layout title="Lugares sugeridos">
                <FlatList 
                    data={this.state.list}
                    renderItem={({ item }) => <Text>{ item.title }</Text>}
                />
            </Layout>
        );
    }

};

export default SuggestionList;