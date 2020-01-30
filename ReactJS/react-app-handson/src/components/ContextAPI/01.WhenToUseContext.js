/**
 * When to Use Context:
 *  - Context is designed to share data that can be considered "global"
 *  for a tree of React components, such as the current authenticated user,
 *  theme, or preferred language. 
 */
import React, { Component,createContext } from 'react'

const ThemeContext=createContext('default-context-value');

export class WhenToUseContext extends Component {
    render() {
        return (
            <div>
                <ThemeContext.Provider value="light">
                    {/* This one is passing props which could be used using context */}
                    <Toolbar theme="dark" />
                </ThemeContext.Provider>
            </div>
        )
    }
}

const Toolbar=(props)=>{
    return(
        <div>
            {/* This one is passing props which could be used using context */}
            <ThemedButton theme={props.theme}/>
        </div>
    )
}

const ThemedButton=(props)=>{    
    // This one is passing props which could be used using context
    return <Button theme={props.theme} />    
}

export class Button extends Component {
    static contextType=ThemeContext;
    render() {
        console.log(Button.contextType);
        return (
            <div>
                {/* This one is passing props which could be used using context */}
                <h1>The theme is {this.props.theme} and the theme from the context is {this.context}</h1> 
                <ThemeContext.Consumer>
                    {
                        (theme)=><h1>The theme from consumer is {theme}</h1>
                    } 
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default WhenToUseContext
