import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

class Lugar extends React.Component{

    render () {
        return (
            <View style={styles.container} >
                <View>
                    <Image source={{uri: this.props.lugar.foto}} style={styles.cover}/>
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        width: 200,
        marginBottom: 5,
        marginLeft: 15
    },
    description: {
        marginLeft: 20,
        width: 200
    },
    cover: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
    }
})

export default Lugar;