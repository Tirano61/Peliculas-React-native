

import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const {opacity, fadeIn, fadeOut} = useFade();

    return (
        <View style={{ backgroundColor: 'grey', flex: 1,justifyContent: 'center',
        alignItems: 'center'  }}>

            <Animated.View 
                style={{ 
                    backgroundColor: '#084f6a',
                    height: 150,
                    width: 150, 
                    borderColor: 'white',
                    borderWidth: 10,
                    marginBottom:29,
                    opacity: opacity,
                }}
            />
            <Button 
                title='Fade In'
                onPress={ fadeIn }
            />
            <View style={{marginBottom: 20}}/>
            <Button 
                title='FadeOut'
                onPress={ fadeOut }
            />

        </View>
    )
}
