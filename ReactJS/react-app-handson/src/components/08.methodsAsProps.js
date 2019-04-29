import React, { Component } from 'react'
import ChildComponent from './08.childComponent';
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'parent'
      }
    }
    
    greetParent=(childName)=>{
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
        <div>
            <ChildComponent greetHandler={this.greetParent}/>
        </div>
        )
    }
}

export default ParentComponent
/**
 * When you want to take parent method to child use them as props
 * When you want to get child component in parent, take them as function parameters
 */