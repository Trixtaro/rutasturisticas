import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Close = (props) => {
    return (
        <TouchableOpacity 
            onPress={() => props.onPress()}
            style={styles.container}
        >
            <Text style={styles.button}>
                Regresar
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
         fontWeight: 'bold',
         color: 'white'
    },
    button: {
        
    }
})

export default Close;