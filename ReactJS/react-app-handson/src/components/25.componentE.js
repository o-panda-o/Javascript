import React, { Component } from 'react'
import ComponentF from './25.componentF';
import UserContext from './25.userContext';

class ComponentE extends Component {
    // Only useful for class component
    // Can only be useful for rendering single value, fails in case of multiple values
    static contextType=UserContext
    render() {
        return (
            <div>
                ComponentE context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType=UserContext

export default ComponentE
