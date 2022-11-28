

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigation.tsx/NavigationStacks';


interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'>{};
const screenHeight = Dimensions.get('screen').height;

export const DetailsScreen = ( { route }: Props) => {


  const movie = route.params;
  const uri =  `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
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

      <View style={styles.marginContainer}>
       <Icon 
        name='star'
        color={'grey'}
        size={20}
       />
      </View>

    </ScrollView>
    

  )
}


const styles = StyleSheet.create({
  imageContainer:{
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.65,
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
  
});