import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/VideoLayout';
import PlayPause from '../components/PlayPause';
import ControlLayout from '../components/ControlLayout';

class Player extends React.Component{

    state = {
        loading: true,
        pausado: false,
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

    playPause = () => {
        this.setState({
            pausado: !this.state.pausado
        })
    }

    render(){
        return(
            <Layout
                loading={this.state.loading}
                video={
                    <Video 
                        source={ require('../../../assets/portoviejo-video.mp4') }
                        style={styles.container}
                        resizeMode="cover"
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        paused={this.state.pausado}
                        repeat
                        muted
                    />
                }
                loader={
                    <ActivityIndicator color="white" />
                }
                controls={
                    <ControlLayout>
                        <PlayPause
                            onPress={this.playPause}
                            paused={this.state.pausado}
                        />
                    </ControlLayout>
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