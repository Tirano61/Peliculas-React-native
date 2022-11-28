
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

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

  return (
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
    
  )

}
