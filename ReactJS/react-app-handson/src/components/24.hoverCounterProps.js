import React, { Component } from 'react'

class HoverCounterProps extends Component {
    render() {
        const {incrementCount,count}=this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
            </div>
        )
    }
}

export default HoverCounterProps
