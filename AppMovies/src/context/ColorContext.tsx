/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from 'react';


//definimos los atributos
export interface ImageColors {
    primary: string,
    secondary: string,
}


interface ColorsProps {
    colors: ImageColors;
    prevColor: ImageColors;
    setMainColors: (newColors: ImageColors) => void;
    setPrevMainColors: (newcolors: ImageColors) => void;

}

export const ColorContext = createContext({} as ColorsProps);

export const ColorsProvider = ({ children }: any) => {
    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });
    const [prevColor, setPrevColor] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });




    const setMainColors = (newColors: ImageColors) => {
        setColors(newColors);
    };
    const setPrevMainColors = (newColors: ImageColors) => {
        setPrevColor(newColors);
    };


    return (
        <ColorContext.Provider
            value={{
                colors,
                setMainColors,
                prevColor,
                setPrevMainColors,

            }}
        >
            {children}
        </ColorContext.Provider>
    );
};
