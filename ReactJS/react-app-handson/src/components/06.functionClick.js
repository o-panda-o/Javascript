import React, { Component } from 'react'

export default class MouseClick extends Component {

    clickHandler=()=>{
        console.log('Button clicked')
    }

    render() {
        return (
        <div>
            <button onClick={this.clickHandler}>Click</button>
        </div>
        )
    }
}
/**
 * Add a function name not the function call in event handler,
 * because it'll call the function on loading. Also, specially
 * in case of class component, it may clutter the console by 
 * invoking it time and again when the state is changed.
 */