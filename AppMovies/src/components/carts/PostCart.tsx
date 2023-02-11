/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movies } from '../../interfaces/movies';
interface Props {
    movie: Movies,
    width?: number,
    height?: number,
}

const PostCart = ({ movie, width = 300, height = 420 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
    const navigation = useNavigation();
    const detailsCart = () => {
        navigation.navigate('DetailMovi', movie);

    };
    return (
        <TouchableOpacity
            onPress={() => detailsCart()}
            activeOpacity={0.9}
            style={{
                width,
                height,
                marginHorizontal: 4,
                paddingBottom: 20,
                top: width === 300 ? 50 : 0,
            }}>
            <View style={styles.containerImage}>
                <Image
                    style={styles.imeg}
                    source={{ uri }}
                />
            </View>

            {width !== 300 && <Text style={styles.title}>
                {movie.title.length > 15 ? movie.title.substring(0, 10) + '...' : movie.title}
            </Text>}

        </TouchableOpacity>
    );
};
export default PostCart;

const styles = StyleSheet.create({
    sizeImage: {
        width: 300,
        height: 420,
        top: 50,
    },
    imeg: {
        flex: 1,
        borderRadius: 18,
    },
    containerImage: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        position: 'relative',
    },
    title: {
        fontSize: 20,
        top: 10,
        fontWeight: '500',
        flexShrink: 1,
        colo: '#000',
        height: 32,
    },

});
