import React, { Component } from 'react'
import FRInput from './20.forwardRefInput';

class FRParentInput extends Component {
    constructor(props) {
        super(props)
        // Step 1: Create the ref element
        this.inputRef=React.createRef()
    }
    
    clickHandler=()=>{
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                {/* Step 2: Include the ref element */}
               <FRInput ref={this.inputRef}/> 
               <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
