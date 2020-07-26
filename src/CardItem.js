import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    Image

} from 'react-native';

import cardImg from '../assets/S10.png'


const CardItem = ({ index, item, x }) => {
    // if (index == 2) {
    //     console.log(x)
    // }


    const translateX = Animated.add(x, x.interpolate({
        inputRange: [0, index * 116],
        outputRange: [0, - index * 116],
        extrapolate: "clamp",
    }))
    return (
        <Animated.View
            style={[styles.upContainer, { transform: [{ translateX }] }]}
            key={index} >
            <Animated.View style={styles.container} >
                <Image style={styles.container} source={cardImg} />
            </Animated.View>
        </Animated.View>

    );
}


const styles = StyleSheet.create({
    upContainer: {
        margin: 12
    },
    container: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#ffffffff',
        shadowOffset: { width: 0, height: 0 },
        height: 130,
        aspectRatio: ((120 / 170)),
    },
    image: {
        // resizeMode: 'stretch'
    }
})

export { CardItem }


