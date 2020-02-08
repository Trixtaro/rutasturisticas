import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const SuggestionListLayout = (props) => {

    return (
        <View style={styles.container}>
            <Text style={[styles.title,{color: (props.color) ? props.color : styles.title.color}]}>
                {props.title}
            </Text>
            {props.children}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0002',
        paddingVertical: 10,
        flex: 1,
        margin: 10
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8
    }
})

export default SuggestionListLayout;