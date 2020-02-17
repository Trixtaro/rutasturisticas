import React from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import Lugar from '../components/Lugar';

import * as lugaresActions from '../../../redux/actions/lugaresActions';

const { traerPorZona : traerLugarPorZona } = lugaresActions

class SuggestionList extends React.Component{

    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias" />
    renderSeparator = () => <Separator color="green" />
    renderLugar = ({item}) => <Lugar lugar={item}/>

    async componentDidMount(){

        if (!this.props.lugares.length){
            await this.props.traerLugarPorZona(3)
        }
        
    }

    render(){

        return (
            <Layout title="Lugares sugeridos">
                <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.props.propData || this.props.lugares }
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={this.renderLugar}
                />
            </Layout>
        );
    }

};

const mapStateToProps = ({ lugaresReducer }) => lugaresReducer

const mapDispatchToProps = {
    traerLugarPorZona
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);