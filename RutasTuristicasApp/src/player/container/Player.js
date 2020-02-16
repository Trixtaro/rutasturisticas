import React from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/VideoLayout';

class Player extends React.Component{

    render(){
        return(
            <Layout>
                <Video 
                    source={{ uri: 'http://techslides.com/demos/sample-videos/small.mp4' }}
                    style={styles.container}
                    resizeMode="cover"
                />
            </Layout>
        );
    }

}

const styles = StyleSheet.create({
    container: { 
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
})

export default Player;