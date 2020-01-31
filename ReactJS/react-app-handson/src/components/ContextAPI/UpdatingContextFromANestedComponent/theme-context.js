import {createContext} from 'react';

export const themes={
    light: {
        foreground: '#000000',
        background: '#eeeeee',
      },
      dark: {
        foreground: '#ffffff',
        background: '#222222',
      },
};

/**
 * Make sure that the shape of the default value passed to 
 * create context matches the shape that the consumer expects!
 */
export const ThemeContext=createContext({
  theme:themes.dark,
  toggleTheme:()=>{},
});