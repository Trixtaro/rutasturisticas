import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

class Lugar extends React.Component{

    render () {
        return (
            <View style={styles.container} >
                <View>
                    <Image source={{uri: this.props.lugar.foto}} style={styles.cover}/>
                </View>
                <Text style={styles.title}>{ this.props.lugar.nombre }</Text>
                {/* <Text style={styles.description}>{ this.props.lugar.descripcion }</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#AAA5',
        borderRadius: 10
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        width: '50%',
        textAlign: 'center',
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
        marginLeft: 5,
        borderRadius: 20
    }
})

export default Lugar;