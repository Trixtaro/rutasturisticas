import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const Header = (props) => {

    return (
        <View>
            <SafeAreaView>
                <View style={styles.header}>
                    <Image 
                        source={require('../../../assets/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.titulo}>Rutas Turísticas</Text>
                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );

}

const styles = StyleSheet.create({  
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#55d3bc',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10
    },
    titulo: {
        color: '#176859',
        fontWeight: '700',
        fontSize: 20
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        color: 'white'
    }
})

export default Header;