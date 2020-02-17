import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

import Home from './screens/containers/home';
import Header from './sections/components/Header';
import SuggestionList from './sections/containers/SuggestionList';
import ListaCiudades from './sections/containers/ListaCiudades';
import Player from './player/container/Player';
import Buscador from './sections/components/Buscador';

class AppLayout extends React.Component{

    render(){
        return (
            <Home>
                <Header>
                <Text style={{color: 'white'}}></Text>
                </Header>

                <ImageBackground
                    source={require('../assets/bg-2.png')}
                    style={styles.container}
                >
                    <Buscador />

                    <Player />

                    <ListaCiudades />
                    <SuggestionList />

                </ImageBackground>

            </Home>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AppLayout;