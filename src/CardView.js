import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    FlatList

} from 'react-native';
import cardimg from '../assets/S10.png'
import { CardItem } from './CardItem';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const cards = [...Array(13).keys()].map(x => ({ cardimg, index: x }))

const CardView = (props) => {
    const x = new Animated.Value(0)
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
        useNativeDriver: true,
    });
    return (
        <Animated.FlatList
            scrollEventThrottle={16}
            horizontal={true}
            data={cards}
            showsHorizontalScrollIndicator={false}
            renderItem={({ index, cardimg }) =>
                (<CardItem
                    {...{ index, cardimg, x }}
                />)}
            keyExtractor={e => e.index}
            {...{ onScroll }}
        />
    )
}


const styles = StyleSheet.create({
    container: {

    }
})

export { CardView }