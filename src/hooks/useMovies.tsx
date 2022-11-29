
import React from 'react'
import { useEffect, useState } from "react";
import moviDB from '../api/moviDB';
import { MovieDBNowPlaying, Movie } from '../interfaces/MovieInterface';

interface MoviesState{
    nowPlaying: Movie[],
    popular:    Movie[],
    topRated:   Movie[],
    upcoming:   Movie[], 
}

export const useMovies = () => {
    
    const [isLoading, setisLoading] = useState(true);
    const [movieState, setMovieState] = useState<MoviesState>({
        nowPlaying: [],  
        popular: [],  
        topRated: [],  
        upcoming: [],  
    });
  
 
    const getMovies = async(page: number = 1) => {
        const nowPlayingPromise = moviDB.get<MovieDBNowPlaying>('/now_playing');
        const popularPromise    = moviDB.get<MovieDBNowPlaying>('/popular');
        const topRatedPromise   = moviDB.get<MovieDBNowPlaying>('/top_rated');
        const upcomingPromise   = moviDB.get<MovieDBNowPlaying>('/upcoming');

        const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);

        setMovieState({
            nowPlaying: response[0].data.results,
            popular:    response[1].data.results,
            topRated:   response[2].data.results,
            upcoming:   response[3].data.results,
        })

        setisLoading(false);
        
        
    }

    useEffect(() => {
   
        getMovies();
      
    }, [])
    
    

    return{
        ...movieState,
        isLoading,
        getMovies,
    }
    
}
