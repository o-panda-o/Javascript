import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        // Step 1: Creation of ref
        this.inputRef=React.createRef()
        
        // Callback ref(another `ref` creation approach)
        this.callbackRef=null
        this.setCallbackRef=DOMElement => {
            this.callbackRef=DOMElement
        }
        this.state = {
        }
    }

    componentDidMount(){

        /**
         * Either comment the input ref or callback ref
         * to see the behaviour. 
         */
        
        // Input ref
        this.inputRef.current.focus();
        console.log(this.inputRef);

        // Callback ref
        if(this.callbackRef){
            this.callbackRef.focus();
            console.log(this.callbackRef);
        }
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value);
    }
    
    render() {
        return (
            <div>
                {/* Step 2: Adding ref to the component */}
                <input type="text" 
                    ref={this.inputRef}
                />
                {/* Callback ref */}
                <input type="text" 
                    ref={this.setCallbackRef}
                />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

/**
 * Refs:
 *  - Refs provide a way to access DOM nodes or React elements created
 *    in the render method.
 *  - 
 */
