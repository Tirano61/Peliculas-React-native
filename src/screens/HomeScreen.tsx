
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackgound } from '../components/GradientBackgound';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColores';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { nowPlaying, isLoading, popular, topRated, upcoming } = useMovies();

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent:'center'}}>
        <ActivityIndicator color="red" size={30}  />
      </View>
    )
  }
 const getPosterColors = async(index: number) => {

  const movie = nowPlaying[index];
  const uri =  `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  const [ primary, secondary ] = await getImageColors(uri);


 }



  return (
    <GradientBackgound>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carousel principal */}
          <View style={{ height: 440 }}>
            <Carousel
              data={ nowPlaying }
              renderItem={ ({item}: any) => <MoviePoster movie={item} /> }
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={ index => getPosterColors(index) }
            />
          </View>
          {/* Peliculas Populares */}
          <HorizontalSlider 
            titulo='Populares'
            movies={ popular }
          />   
          
          {/* Peliculas Populares */}
          <HorizontalSlider 
            titulo='Mejor Ranqueadas '
            movies={ topRated }
          /> 
          {/* Peliculas Populares */}
          <HorizontalSlider 
            titulo='Por Venir'
            movies={ upcoming }
          /> 
          {/* Peliculas Populares */}

        </View>
      </ScrollView>
    </GradientBackgound>
    
  )

}
