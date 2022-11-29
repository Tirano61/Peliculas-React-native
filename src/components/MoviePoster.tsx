

import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/MovieInterface';


interface Props {
    movie: Movie,
    height?: number,
    width?: number,
}

export const MoviePoster = ({ movie, height= 420, width = 280 }: Props) => {

    const uri =  `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation =useNavigation();

  return (
    <TouchableOpacity 
        onPress={ () => navigation.navigate('DetailsScreen', movie) }
        activeOpacity={0.8}
        style={{
            width: width,
            height: height,
            marginHorizontal: 2,
            paddingBottom: 20,
            paddingHorizontal: 8,
            
        }}
    >
        <View style={styles.imageContainer}>
            <Image 
                source={{ uri: uri }}
                style={ styles.image }
            />
        </View>
        
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    image:{
        flex: 1,
        borderRadius: 18,
    },
    imageContainer:{
        
        borderRadius: 18,
        flex: 1,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 10,
        elevation: 9,
        
    },
});