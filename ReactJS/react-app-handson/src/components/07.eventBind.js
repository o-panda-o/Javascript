import React, { Component } from 'react'

export class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

      // Code for Approach 3
      // this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'GoodBye'
        })
        console.log(this); // It'll return undefined if not binded
    }
    
    render() {
        return (
        <div>
            <div>{this.state.message}</div>
            {/* 
            Approach 1:(Rendering using bind method)
            This is good but with every change in state it'll render by creating 
            a brand new event handler, which is not good. The performance won't matter
            in small application but for larger one it'll screw up.
            <button onClick={this.clickHandler.bind(this)}>Click</button>
             */}

            {/*
            Approach 2:(Using arrow functions for rendering)
            This approach also has performance implication. 
            <button onClick={()=>this.clickHandler()}>Click</button> 
            */}
            {/* 
            Approach 3:(Using binding in the constructor)
                This is the approach we'll see in most of the cases and also defined
                in official react documentation. It involved binding the event handler
                inside the constructor. */}
            <button onClick={this.clickHandler}>Click</button>
        </div>
        )
    }

    // Approach 4:(Using arrow function to define methods.)
    clickHandler=()=>{
        this.setState({
            message:'GoodBye'
        })
        console.log(this); // It'll return undefined if not binded
    }
    
}

export default EventBinding

// Use mostly approach number 3 or 4

/**
 * Handling Events:
 *  - Handling events with React elements is very similar to handling events on
 *    DOM elements. There are some syntactic differences:
 *      1. React events are named using camelCase, rather than lowercase.
 *      2. With JSX you pass a function as the event handler, rather than a string.
 */