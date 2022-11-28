import { useState, useEffect } from 'react';
import moviDB from '../api/moviDB';
import { MovieFull } from '../interfaces/MovieInterface';
import { CredictsResponse, Cast } from '../interfaces/CredictsInterface';



interface MovieDetails{
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[],

}




export const useMovieDetails = (movieId: number) => {
  
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async() =>{
        const movieDetailsPromise = await moviDB.get<MovieFull>(`/${movieId}`);
        const castPromise = await moviDB.get<CredictsResponse>(`/${movieId}/credits`);
        
        const [movieDetailsResp, castResp] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castResp.data.cast,
        });


    }

    useEffect(() => {
      getMovieDetails();
    }, [])
    
  
    return {
        ...state,
    }
}
