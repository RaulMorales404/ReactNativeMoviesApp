/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, View, StyleSheet, Text, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Movies } from '../../interfaces/movies';
import { RootsStackParams } from '../../navigation/Navigation';
import useDetails from '../../hooks/useDetails';
import InfoMovieDetails from '../../components/details/InfoMovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props extends StackScreenProps<RootsStackParams, 'DetailMovi'> {
    movie: Movies,
}

const screnHeight = Dimensions.get('screen').height;


const Details = ({ route, navigation }: Props) => {
    const movie = route.params as Movies;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
    const { isLoading,
        fullInfoMovi,
        cast,
    } = useDetails(movie.id);

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={{ backgroundColor: '#F2F3F4' }}>
            <View style={styles.containerImage}>
                <Image source={{ uri }} style={styles.image} />
                <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
                    <Icon name="arrow-back-outline" size={50} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerText}>
                <Text style={{ fontSize: 18, color: '#999' }}>
                    {movie.original_title}
                </Text>
                <Text style={{ fontSize: 23, color: '#000', fontWeight: '700' }}>
                    {movie.title}
                </Text>
                {isLoading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color={'red'} size={50} />
                </View > :
                    <InfoMovieDetails infoMovie={fullInfoMovi!} actors={cast} />
                }
            </View>
        </ScrollView>
    );
};


export default Details;

const styles = StyleSheet.create({
    containerImage: {
        width: '100%',
        height: screnHeight * 0.7,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
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
    image: {
        flex: 1,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 40,
        left: 10,
        borderRadius: 50,
        position: 'absolute',
        width: 65,
        height: 65,
        backgroundColor: '#777',
        opacity: 0.8,
    },
    containerText: {
        marginTop: 20,
        alignSelf: 'center',
        width: '90%',
    },
});
