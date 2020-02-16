import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

const PlayPause = (props) => {
    return (
        <TouchableHighlight 
            onPress={props.onPress}
            style={styles.container}
            underlayColor="#0000"
            hitSlop={{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5
            }}
        >
        {
            props.paused ?
            <Image 
                source={ require('../../../assets/play-icon.png')}
                style={styles.button}
            /> :
            <View style={styles.button} />
        }
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
      color: 'white',
      height: 50,
      width: 50,
      fontSize: 10,
      fontWeight: 'bold',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    }
  })

export default PlayPause;