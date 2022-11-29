import { createContext, useState } from 'react';


interface ImageColors {
    primary: string,
    secondary: string
}

interface ContextProps {
    colorState: ImageColors,
    prevColorState: ImageColors,
    setMainColorState: (colors: ImageColors) => void,
    setPrevMainColors: (colors: ImageColors) => void,
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) =>{

    const [colorState, setColorState] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });
    const [prevColorState, setPrevColorState] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setMainColorState = (colors: ImageColors) => {
        setColorState( colors );
    }
    const setPrevMainColors = (colors: ImageColors) => {
        setPrevColorState(colors)
    }

    return (
        <GradientContext.Provider value={{
            colorState,
            prevColorState,
            setMainColorState,
            setPrevMainColors,

        }}>
            { children }
        </GradientContext.Provider>
    )

}