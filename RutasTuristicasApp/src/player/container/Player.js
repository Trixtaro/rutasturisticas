import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/VideoLayout';

class Player extends React.Component{

    state = {
        loading: true,
    }
    
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }

    onLoad = () => {
        this.setState({
            loading: false
        })
    }

    render(){
        return(
            <Layout
                loading={this.state.loading}
                video={
                    <Video 
                        source={{ uri: 'http://techslides.com/demos/sample-videos/small.mp4' }}
                        style={styles.container}
                        resizeMode="cover"
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        repeat
                        muted
                    />
                }
                loader={
                    <ActivityIndicator color="white" />
                }
            />
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