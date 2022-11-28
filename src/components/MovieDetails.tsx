

import React from 'react'
import currencyFormatter from "currency-formatter";
import { FlatList, Text, View } from 'react-native'
import { MovieFull } from '../interfaces/MovieInterface';
import { Cast } from '../interfaces/CredictsInterface';
import Icon  from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';
import { HorizontalSlider } from './HorizontalSlider';


interface Props{
    movieFull: MovieFull,
    cast: Cast[],
}

export const MovieDetails = ({ movieFull, cast }: Props ) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row'}}>
              <Icon name='star-outline' size={16} color='grey'/>
              <Text>{ movieFull.vote_average }</Text>
              <Text style={{marginLeft: 10}}>
                - { movieFull.genres.map(g=> g.name).join(', ') }
              </Text>
          </View>
          {/* Historia */}
          <Text style={{fontSize:20, marginTop: 20,color: 'black'}}>Historia</Text>
          <Text style={{fontSize: 16}}>{ movieFull.overview }</Text>
          
          {/* Presupuesto */}
          <Text style={{fontSize:20, marginTop: 20,color: 'black'}}>Presupuesto</Text>
          <Text style={{fontSize: 16}}>{ currencyFormatter.format(movieFull.budget, {code:'USD'}) }</Text>

      </View>
      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 100}}>
        <Text style={{fontSize:20, marginVertical: 20,color: 'black', marginHorizontal:20}}>Actores</Text>
        <FlatList 
          data={cast}
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({ item }) => <CastItem actor={ item } /> }
          horizontal= { true }
          showsHorizontalScrollIndicator= { false }
          style={{height:70}}
        />
          
        
      </View>
    </>
  )
}
