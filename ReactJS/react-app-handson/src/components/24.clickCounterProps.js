import React, { Component } from 'react'

class ClickCounterProps extends Component {    
    render() {
        const {incrementCount,count}=this.props
        return (
                <button onClick={incrementCount}>Clicked {count} Times</button> 
        )
    }
}

export default ClickCounterProps
