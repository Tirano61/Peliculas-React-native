import { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from "react-native-linear-gradient"
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackgound = ( {children}: Props ) => {
  

    const {colorState, prevColorState, setPrevMainColors} = useContext(GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn( () =>{
            setPrevMainColors(colorState);
            fadeOut(100); 
        });
      
    }, [colorState])
    
    

    return (
        <View style={{flex:1, }}>
           
            <LinearGradient 
                    colors={[prevColorState.primary, prevColorState.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x:0.1, y: 0.1}}
                    end={{ x: 0.8, y:0.7 }}
            />
            <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity: opacity }}>
                <LinearGradient 
                    colors={[colorState.primary, colorState.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject,  }}
                    start={{ x:0.1, y: 0.1}}
                    end={{ x: 0.8, y:0.7 }}
                />
            </Animated.View> 
            
          
           { children }
        </View>
    )
}
