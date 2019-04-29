import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    increment(){
        // If you won't use this then the UI won't render
        // the changed value. In short, don't modify the
        // state directly.

        // Also in case you want to do something after this operation
        // then it is better to put it in callback method.
        this.setState({
            count: this.state.count+1
        },
        ()=>{
            console.log('Callback value we get is '+this.state.count)
        })
        console.log('As this is an asynchronous call so you might see the value in the UI 1 more than console.')
        console.log(this.state.count)
    }

    incrementBy1=()=>{
        this.setState(prevState => ({
            count: prevState.count+1
        }))        
    }
    incrementFive(){
        // If things are not grouped properly then react will group them
        // in a single go hence by improving performance but not doing what
        // it is intended to.
        this.incrementBy1();
        this.incrementBy1();
        this.incrementBy1();
        this.incrementBy1();
        this.incrementBy1();
    }

    render() {
        return (
        <div>
            <br />
            Count - {this.state.count}
            <br /><br />
            <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
        )
    }
}

export default Counter
