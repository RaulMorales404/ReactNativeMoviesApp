/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../../hooks/useMovies';
import PostCart from '../../components/carts/PostCart';
import HorizontalList from '../../components/horizontalList/HorizontalList';
import BackgroundGradient from '../../components/gradientBackground/BackgroundGradient';
import { getImageColors } from '../../helpers/getColors';
import { ColorContext } from '../../context/ColorContext';


const { width: widthScreen } = Dimensions.get('window');
const Home = () => {
    const {
        nowPlaying,
        popular,
        topRated,
        upcoming,
        isLoading,
    } = useMovies();
    const { setMainColors } = useContext(ColorContext);
    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
    }, [nowPlaying]);

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index].backdrop_path;
        const uri = `https://image.tmdb.org/t/p/w500/${movie}`;
        const [primary = '#084f6a', secondary = '#75cedb'] = await getImageColors(uri);
        setMainColors({ primary, secondary });
    };


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={'red'} size={100} />
            </View >
        );
    }


    return (
        <BackgroundGradient>
            <ScrollView>
                <View style={{ flex: 1, marginBottom: 50 }}>
                    <View style={{ height: 480 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <PostCart movie={item} />}
                            sliderWidth={widthScreen}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}

                        />
                    </View>
                    <HorizontalList title="POPULARS" movies={popular} />
                    <HorizontalList title="TOP RATED" movies={topRated} />
                    <HorizontalList title="UPCOMING" movies={upcoming} />
                </View>
            </ScrollView>
        </BackgroundGradient>
    );
};

export default Home;
