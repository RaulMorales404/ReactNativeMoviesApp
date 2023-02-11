/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { FlatList, Text, View } from 'react-native';
import PostCart from '../carts/PostCart';
import { Movies } from '../../interfaces/movies';
import { colors } from '../../themes/colors';

interface Props {
    title?: string,
    movies: Movies[],
}
export const HorizontalList = ({ title, movies }: Props) => {
    return (
        <View style={{ width: '100%', height: 315, top: 30 }}>
            <View>
                <Text style={{
                    color: colors.blue,
                    fontSize: 25,
                    height: 35,
                    marginBottom: title ? 30 : 0,
                }}>
                    {title}
                </Text>
            </View>

            <FlatList

                data={movies}
                renderItem={({ item }: any) => (
                    <PostCart width={140} height={240} movie={item} />
                )
                }
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default HorizontalList;


