import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../../interfaces/credits';

interface Props {
    actor: Cast,
}

const CartActors = ({ actor }: Props) => {
    const uri = actor.profile_path ?
        `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
        : 'https://www.softzone.es/app/uploads/2018/04/guest.png';

    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri }} style={styles.img} />
                <View style={styles.contentTitles}>
                    <Text style={styles.title}>
                        {actor.name}
                    </Text>
                    <Text style={styles.subTitle}>
                        {actor.original_name}
                    </Text>
                </View>

            </View>
        </View>
    );
};
export default CartActors;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 'auto',
        margin: 10,
        borderRadius: 18,
        height: 100,
        shadowColor: '#000000',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative',
    },
    img: {
        width: 80,
        height: 100,
        borderBottomLeftRadius: 10,
        borderTopStartRadius: 10,
        borderTopLeftRadius: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 20,
    },
    subTitle: {
        fontSize: 20,
        color: '#999',
        fontWeight: '500',
    },
    contentTitles: {
        marginLeft: 20,
        justifyContent: 'center',
        flexDirection: 'column',
    },
});
