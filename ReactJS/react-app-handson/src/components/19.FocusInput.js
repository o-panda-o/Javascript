import React, { Component } from 'react'
import RefsWithClassComponent from './19.refsWithClassComponent';

class FocusInput extends Component {

    constructor(props) {
      super(props)

      this.componentRef=React.createRef()
    
      this.state = {
         
      }
    }

    clickHandler=()=>{
        this.componentRef.current.focusInput();
    }
    /**
     * Refs cann't be attached to functional component, we need a 
     * class component for the same.
     */
    render() {
        return (
            <div>
                <RefsWithClassComponent ref={this.componentRef}/>
                <button  onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
