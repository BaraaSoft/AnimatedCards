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
        <View style={styles.container}>
            <Animated.FlatList
                scrollEventThrottle={16}
                horizontal={true}
                data={cards}
                style={styles.listStyle}
                contentContainerStyle={styles.listContentStyle}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, cardimg }) =>
                    (<CardItem
                        {...{ index, cardimg, x }}
                    />)}
                keyExtractor={e => e.index}
                {...{ onScroll }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // alignItems: 'stretch',
        // flex: 1,
        alignSelf: 'flex-end',
        width: '100%',
        height: 280,
    },
    listStyle: {
        backgroundColor: '#fff'
    },
    listContentStyle: {
        alignSelf: 'flex-end',
        paddingStart: 90
    }

})

export { CardView }