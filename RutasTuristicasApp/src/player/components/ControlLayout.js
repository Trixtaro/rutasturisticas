import React from 'react';
import { View, StyleSheet } from 'react-native' 

const ControlLayout = (props) => {

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

export default ControlLayout;