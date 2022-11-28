

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigation.tsx/NavigationStacks';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';


interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'>{};
const screenHeight = Dimensions.get('screen').height;

export const DetailsScreen = ( { route, navigation }: Props) => {


  const movie = route.params;
  const uri =  `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image 
            source={{ uri: uri }}
            style={styles.posterImage}
        />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

   
        {
          isLoading
            ? <ActivityIndicator size={30} color='grey' style={{marginTop:20}} />
            : <MovieDetails movieFull={ movieFull! } cast={ cast }/>
        }

        {/* Boton para cerrar */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.pop()}
        >
          <Icon
            name='arrow-back-outline'
            color={'black'}
            size={60}
          />
        </TouchableOpacity>
        

    </ScrollView>

  )
}


const styles = StyleSheet.create({
  imageContainer:{
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "black",
      shadowOffset: {
          width: 20,
          height: 10,
      },
      shadowOpacity: 0.9,
      shadowRadius: 7,
      elevation: 12,
    borderBottomEndRadius: 25,  
    borderBottomStartRadius: 25,
  },
  posterImage:{
    flex: 1,
  },
  marginContainer:{
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  backButton:{
    position: 'absolute',   
    elevation: 9,
  },
  
});