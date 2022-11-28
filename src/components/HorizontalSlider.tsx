

import React from 'react'
import { Movie } from '../interfaces/MovieInterface';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props{
    titulo?: string,
    movies: Movie[],
}

export const HorizontalSlider = ({ titulo, movies }: Props) => {
  return (
    <View style={{ height: (titulo) ? 260 : 220 }}>
        {
            titulo && <Text style={{ 
                fontSize:20,
                fontWeight: 'bold', 
                marginLeft: 15,
                marginBottom: 5, 
            }}>{ titulo }</Text>
        }
        
        <FlatList 
            data={movies}
            renderItem={ ({item}: any) => (
                <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View> 
  )
}
