import { useRef } from 'react';
import { Animated } from 'react-native';

const useAnimation = (calueDefault: number) => {

    const opacity = useRef(new Animated.Value(calueDefault)).current;

    const fadeIn = (value: number, callback?: Function) => {
        Animated.timing(
            opacity, {
            toValue: value,
            duration: 100,
            useNativeDriver: true,
        },
        ).start(() => callback ? callback() : null);
    };

    return {
        opacity,
        fadeIn,
    };
};

export default useAnimation;
