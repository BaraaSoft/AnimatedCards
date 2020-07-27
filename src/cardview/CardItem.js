import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Animated,
    Image,
    Dimensions

} from 'react-native';

import cardImg from '../assets/S10.png'


const VIEW_WIDTH = Dimensions.get("window").width
const CARD_WIDTH = 94

const CardItem = ({ index, item, x }) => {

    const position = Animated.subtract(index * CARD_WIDTH, x)
    const midPos = Animated.subtract(VIEW_WIDTH, position)
    const animeval = Animated.divide(midPos, 1)

    const rotateZ = animeval.interpolate({
        inputRange: [0, 13 * CARD_WIDTH],
        outputRange: [`${-1}deg`, `${-45}deg`]
    })
    return (
        <Animated.View
            style={[styles.upContainer, { transform: [{ rotateZ }] }]}
            key={index} >
            <Animated.View style={styles.container} >
                <Image style={styles.container} source={cardImg} />
            </Animated.View>
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    upContainer: {
        margin: 0,
        marginVertical: 30,
        marginLeft: -74,
        borderRadius: 2,
    },
    container: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: 2,
        borderWidth: 0,
        borderColor: '#ffffffff',
        shadowOffset: { width: 0, height: 0 },
        height: 144,
        aspectRatio: ((120 / 170)),
    },
    image: {
        borderRadius: 2,
    }
})

export { CardItem }


