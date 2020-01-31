import React, { Component } from 'react'
import {ThemeContext} from './theme-context'

export class ThemedButton extends Component {
    render() {
        console.log('Props destructured element ')
        console.log({...this.props})
        let props=this.props;
        let theme=this.context;
        return (
            <button 
                {...props} 
                style={{backgroundColor:theme.background}} 
            />
        )
    }
}
ThemedButton.contextType=ThemeContext;

export default ThemedButton
