import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        // Step 1: Creation of ref
        this.inputRef=React.createRef()
        
        // Callback ref
        this.callbackRef=null
        this.setCallbackRef=element => {
            this.callbackRef=element
        }
        this.state = {
        }
    }

    componentDidMount(){
        this.inputRef.current.focus()

        // Callback ref
        if(this.callbackRef){
            this.callbackRef.focus()
        }
        console.log(this.inputRef)
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value);
    }
    
    render() {
        return (
            <div>
                {/* Step 2: Adding ref to the component */}
                <input type="text" ref={this.inputRef}/>
                {/* Callback ref */}
                <input type="text" ref={this.setCallbackRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
