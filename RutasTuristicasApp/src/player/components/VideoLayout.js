import React from 'react';
import { View, StyleSheet } from 'react-native';

const VideoLayout = (props) => (
    <View style={styles.container}>
        <View style={styles.video}>
            {props.children}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: '56.25%',
    },
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: '#000'
    }
})

export default VideoLayout;