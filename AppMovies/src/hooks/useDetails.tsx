/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useEffect } from 'react';
import movieDB from '../api/MovieDB';
import { DetailsMovie } from '../interfaces/details';
import { Cast, CreditMovie } from '../interfaces/credits';

interface InfoDetails {
    isLoading: boolean,
    fullInfoMovi?: DetailsMovie,
    cast: Cast[],
}

export const useDetails = (movieId: number) => {
    const [infoDetailsState, setInfoDetailsState] = useState<InfoDetails>(
        {
            isLoading: true,
            fullInfoMovi: undefined,
            cast: [],
        }
    );


    useEffect(() => {
        getInfoDetails();
    }, []);

    const getInfoDetails = async () => {

        try {
            const fullMovie = movieDB.get<DetailsMovie>(`/${movieId}`);
            const castInfo = movieDB.get<CreditMovie>(`/${movieId}/credits`);

            const [respFullMovies, respCastInfo] = await Promise.all([fullMovie, castInfo]);

            setInfoDetailsState({
                isLoading: false,
                fullInfoMovi: respFullMovies.data,
                cast: respCastInfo.data.cast,
            });
        } catch (error) {
            setInfoDetailsState({
                ...infoDetailsState,
                isLoading: false,
            });

        }
    };
    return {
        ...infoDetailsState,
    };
};
export default useDetails;
