import React from 'react';
import { FlatList } from 'react-native';
import { Cast } from '../../interfaces/credits';
import CartActors from './CartActors';

interface Props {
    actors: Cast[],
}

const ListActors = ({ actors }: Props) => {
    return (

        <FlatList
            data={actors}
            renderItem={({ item }: any) => (
                <CartActors actor={item} />
            )
            }
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    );
};
export default ListActors;
