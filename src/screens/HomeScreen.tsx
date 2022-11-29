
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { ActivityIndicator, Dimensions, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackgound } from '../components/GradientBackgound';
import { getImageColors } from '../helpers/getColores';
import { useContext, useEffect } from 'react';
import { GradientContext } from '../context/GradientContext';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  let page = 1
  const { nowPlaying, isLoading, popular, topRated, upcoming } = useMovies(page);
  const { top } = useSafeAreaInsets();
  const { setMainColorState } = useContext(GradientContext);

  const getPosterColors = async(index: number) => {

    const movie = nowPlaying[index];
    const uri =  `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
  
    const [ primary = 'green', secondary = 'grey' ] = await getImageColors(uri);
    setMainColorState({primary: primary, secondary: secondary })
  
  }

  useEffect(() => {
    
    if(nowPlaying.length > 0){
      getPosterColors(0)
    }
  
  }, [ nowPlaying ])
 

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent:'center'}}>
        <ActivityIndicator color="red" size={30}  />
      </View>
    )
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
          <TouchableOpacity  
            style={styles.botones}
            onPress={() => { page ++; useMovies(page) }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ color: 'white' }}>Next</Text>
              <Icon name='chevron-forward-outline' size={20} color='white'/>
            </View>  
          </TouchableOpacity> 

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


const styles = StyleSheet.create({
  botones:{
    backgroundColor: 'blue',
    borderRadius: 6,
    width: 65,
    alignSelf: 'flex-end',
    marginEnd: 20
  },
});