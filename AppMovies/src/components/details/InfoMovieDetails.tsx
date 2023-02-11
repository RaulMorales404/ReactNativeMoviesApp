/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { Cast } from '../../interfaces/credits';
import { DetailsMovie } from '../../interfaces/details';
import CartActors from '../actors/CartActors';
import ListActors from '../actors/ListActors';

interface Props {
    infoMovie: DetailsMovie,
    actors: Cast[],
}
export const InfoMovieDetails = ({ infoMovie, actors }: Props) => {

    return (
        <>
            <View style={{ marginBottom: 100 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon style={{ top: -2, padding: 5 }} name="star-outline" size={20} color="#848282" />
                    <Text>
                        {infoMovie.vote_average}
                    </Text>
                    <Text style={{ padding: 5, color: '#848282' }}>
                        {
                            infoMovie.genres.map(actor => (actor.name)).join(', ')
                        }
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 23, color: '#000', fontWeight: 'bold', marginBottom: 10, marginTop: 10 }}>
                        History
                    </Text>
                    <Text style={{ fontSize: 18, color: '#1c1a1a' }}>
                        {infoMovie.overview}
                    </Text>
                    <Text style={{ fontSize: 23, color: '#000', fontWeight: 'bold', marginBottom: 10, marginTop: 10 }}>
                        Presupuesto
                    </Text>
                    <Text style={{
                        fontSize: 18, color: '#1c1a1a',
                        borderColor: 'red',
                        flexDirection: 'column',
                        marginBottom: 3,
                    }}>
                        {currencyFormatter.format(infoMovie.budget, { code: 'USD' })}

                    </Text>
                    <View style={{
                        backgroundColor: '#000', width: '50%', height: 5,
                        borderRadius: 18,
                    }} />
                    <Text style={{ fontSize: 23, color: '#000', fontWeight: 'bold', marginBottom: 10, marginTop: 10 }}>
                        Actors
                    </Text>
                    <ListActors actors={actors} />
                </View>

            </View>
        </>
    );
};

export default InfoMovieDetails;
