import { ThemeContext } from "./theme-context"
import React from 'react';

export const ThemeTogglerButton=()=>{
    // This button not only receives the theme
    // but also a toggle theme function from context
    return(
        <ThemeContext.Consumer>
            {
                ({theme, toggleTheme})=>
                    <button
                        onClick={toggleTheme}
                        style={{backgroundColor:theme.background}}>
                        Toggle Theme
                    </button>
                
            }
        </ThemeContext.Consumer> 
    );
}