import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HorizontalSeparator = (props) => {

    return (
        <View style={[
            styles.separator,
            {
                borderLeftColor: (props.color) ? props.color : '#eaeaea'
            }
            ]}>
        </View>
    );

}

const styles =  StyleSheet.create({
    separator: {
        borderLeftWidth: 1,
    }
})

export default HorizontalSeparator;