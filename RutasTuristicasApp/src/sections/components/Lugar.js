import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

class Lugar extends React.Component{

    render () {
        return (
            <View style={styles.container} >
                <View>
                    <Image source={require('../../../assets/logo.png')} style={styles.cover}/>
                </View>
                <View>
                    <Text style={styles.title}>{ this.props.lugar.nombre }</Text>
                    <Text style={styles.description}>{ this.props.lugar.descripcion }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5
    },
    title: {
        color: '#4cb8c0',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        width: 250,
        marginBottom: 10
    },
    description: {
        marginLeft: 20,
        textAlign: 'center',
        width: 200
    },
    cover: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
    }
})

export default Lugar;