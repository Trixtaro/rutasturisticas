import React from 'react';
import { FlatList, Text } from 'react-native';

class SuggestionList extends React.Component{

    state = {
        list: [
            { key: '1', title: 'Rutas' },
            { key: '2', title: 'Turisticas'}
        ]
    }

    render(){

        return (
            <FlatList 
                data={this.state.list}
                renderItem={({ item }) => <Text>{ item.title }</Text>}
            />
        );
    }

};

export default SuggestionList;