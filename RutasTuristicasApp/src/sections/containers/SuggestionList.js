import React from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import Lugar from '../components/Lugar';

class SuggestionList extends React.Component{

    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias" />
    renderSeparator = () => <Separator />
    renderLugar = ({item}) => <Lugar lugar={item}/>

    render(){

        return (
            <Layout title="Lugares sugeridos">
                <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.props.data}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={this.renderLugar}
                />
            </Layout>
        );
    }

};

export default SuggestionList;