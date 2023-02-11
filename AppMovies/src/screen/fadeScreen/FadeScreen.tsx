/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Animated, View } from 'react-native';
import useAnimation from '../../hooks/useAnimation';

const FadeScreen = () => {
    const { opacity } = useAnimation(0.2);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Animated.View style={{
                width: 200,
                height: 200,
                borderWidth: 10,
                borderColor: '#fff',
                backgroundColor: '#131b2f',
                opacity,
            }} />
        </View>
    );
};

export default FadeScreen;
