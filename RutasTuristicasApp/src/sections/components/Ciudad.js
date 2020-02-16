import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

class Ciudad extends React.Component{

    render(){
        return (
                <ImageBackground
                    source={ this.props.ciudad.foto }
                    style={styles.container}
                    >
                    <Text style={styles.text}>
                        { this.props.ciudad.nombre }
                    </Text>
                </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: 200,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    text: {
        color: 'white',
        backgroundColor: 'black',
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 5,
        borderTopLeftRadius: 10,
    }
})

export default Ciudad;