import React, { Component } from 'react'
import { ThemeTogglerButton } from './theme-toggler-button'
import { themes, ThemeContext } from './theme-context'

export class UpdaingContextFromANestedComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             theme:themes.light,
             toggleTheme:this.toggleTheme,
        }
    };

    toggleTheme=()=>{
        this.setState(prevState=>({
            theme:prevState.theme===themes.dark ? themes.light : themes.dark
        }));
    };
    
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Content />
                </ThemeContext.Provider>
            </div>
        )
    };
}

const Content=()=>{
    return(<ThemeTogglerButton />);
}

export default UpdaingContextFromANestedComponent
