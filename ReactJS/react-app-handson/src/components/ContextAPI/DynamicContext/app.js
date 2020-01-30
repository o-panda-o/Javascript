import React, { Component } from 'react'
import ThemedButton from './themed-button'
import { ThemeContext, themes } from './theme-context'

const ToolBar=(props)=>{
    return(
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

export class DynamicComponentApp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             theme:themes.light
        };
    }

    toggleTheme=()=>{
        console.log('toggleTheme clicked')
        this.setState(prevState => ({
            theme:
                prevState.theme === themes.dark
                  ? themes.light
                  : themes.dark,
        })) 
    }
    
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ToolBar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <section>
                    <ThemedButton>
                        Default Behaviour
                    </ThemedButton>
                </section>
            </div>
        )
    }
}

export default DynamicComponentApp
