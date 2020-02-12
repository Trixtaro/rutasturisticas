import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

class Ciudad extends React.Component{

    render(){
        return (
            <View>
                <ImageBackground
                    source={require('./assets/bg-2.png')}
                    style={styles.container}
                    >
                    <Text>
                        
                    </Text>
                </ImageBackground>
            </View>
        );
    }

}

export default Ciudad;