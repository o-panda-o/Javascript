import React, { Component } from 'react'

export default class MouseClick extends Component {

    clickHandler=()=>{
        alert('Button clicked');
    }

    handleClick=(event)=>{
        // Preventing default mouse behaviour
        event.preventDefault();
        alert('Link was clicked');
    }

    render() {
        return (
        <div>
            <a href="#" onClick={this.handleClick}>Click Me</a><br />
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

/**
 * Passing argument to event handler:
 *  - <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
 *  - <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
 */