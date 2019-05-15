import React, { Component } from 'react'

class CounterProp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count:0
        }
    }

    incrementCount=()=>{
        this.setState(prevState => {
            return {
                count:prevState.count+1
            }
        })
    }
    
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.incrementCount)}
                {/*
                // If this statement is used                 
                {this.props.children(this.state.count,this.incrementCount)}

                // Use this in app component
                <CounterProp>
                    {(count,incrementCount)=>(
                        <HoverCounterProps count={count} incrementCount={incrementCount} />
                    )} 
                </CounterProp> 
                */}
            </div>
        )
    }
}


export default CounterProp

/**
 * Render Props:
 *  + The term `render props` refer to a technique for `sharing code` between React 
 *    components using a `prop whose value is a function`.
 */
