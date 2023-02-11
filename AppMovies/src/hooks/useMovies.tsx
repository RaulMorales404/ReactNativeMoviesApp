import movieDB from '../api/MovieDB';
import { Movies, MoviesInterfaceResponce } from '../interfaces/movies';
import { useEffect, useState } from 'react';

interface DataMoviesState {
    nowPlaying: Movies[];
    popular: Movies[];
    topRated: Movies[];
    upcoming: Movies[];

}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [moviesState, setMoviesState] = useState<DataMoviesState>(
        {
            nowPlaying: [],
            popular: [],
            topRated: [],
            upcoming: [],
        }
    );

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        setIsLoading(true);
        try {
            const newPlayingPromise = movieDB.get<MoviesInterfaceResponce>('/now_playing');
            const popularsPromise = movieDB.get<MoviesInterfaceResponce>('/popular');
            const topRatedPromise = movieDB.get<MoviesInterfaceResponce>('/top_rated');
            const upcomingPromise = movieDB.get<MoviesInterfaceResponce>('/upcoming');

            const responsePromis = await Promise.all([
                newPlayingPromise,
                popularsPromise,
                topRatedPromise,
                upcomingPromise]);
            setMoviesState({
                nowPlaying: responsePromis[0].data.results,
                popular: responsePromis[1].data.results,
                topRated: responsePromis[2].data.results,
                upcoming: responsePromis[3].data.results,
            });

        } catch (error) {
            console.log(error);
        } finally {

            setIsLoading(false);
        }
    };
    return {
        ...moviesState,
        isLoading,
    };
};


