import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../sections/components/Header';
import Buscador from '../../sections/components/Buscador';
import Close from '../../sections/components/Close';
import SuggestionList from '../../sections/containers/SuggestionList';

import * as lugaresActions from '../../../redux/actions/lugaresActions';

const { seleccionarZona : guardarIdZonaSeleccionada } = lugaresActions

class LugarPage extends React.Component{

    closeLugar = () => {
        console.log('cerrando...')
        this.props.guardarIdZonaSeleccionada(null)
    }

    render(){
        return (
            <View style={styles.lugarPage}>
                <Header>
                    <Close 
                        onPress={this.closeLugar}
                    />
                </Header>
                <ImageBackground
                    source={require('../../../assets/bg-2.png')}
                    style={styles.lugarPage}
                >
                    <Buscador />

                    <SuggestionList id={'1'} />

                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    lugarPage: {
        flex: 1
    },
    button: {
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        backgroundColor: '#14b739',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const mapStateToProps = ({ lugaresReducer }) => lugaresReducer

const mapDispatchToProps = {
    guardarIdZonaSeleccionada
}

export default connect(mapStateToProps,mapDispatchToProps)(LugarPage);