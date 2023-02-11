/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useContext } from 'react';
import { ColorContext } from '../../context/ColorContext';
import useAnimation from '../../hooks/useAnimation';


interface Props {
    children: JSX.Element | JSX.Element[];
}

const BackgroundGradient = ({ children }: Props) => {
    const { colors, prevColor, setPrevMainColors } = useContext(ColorContext);
    const { fadeIn, opacity } = useAnimation(0);
    useEffect(() => {
        fadeIn(1, () => {
            setPrevMainColors(colors);
        });
        fadeIn(0);
    }, [colors]);

    return (
        <View style={{ flex: 1, backgroundColor: 'orange ' }}>

            <LinearGradient
                colors={[prevColor.primary, prevColor.secondary, 'blue']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.8, y: 0.8 }}
            />

            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'red' }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.8 }}
                />
            </Animated.View>

            {children}
        </View>
    );
};

export default BackgroundGradient;
