import React, { Component } from 'react'
import { UserConsumer } from './25.userContext';

class ComponentF extends Component {
  render() {
    return (
       // Step 3: Consume the context value in necessary component(s)

      <UserConsumer>
          {
              (username)=>{
                return <h1>Hello {username}</h1>
              }
          }
      </UserConsumer>
    )
  }
}

export default ComponentF

/**
 * Context:
 *  + Context provides a way to pass data through the component tree    
 *    without having to pass props manually at every level.
 *  + Steps to use context:
 *      1. Create the context
 *      2. Provide a context value(could be consumed down the tree)
 *      3. Consume the context value in necessary component(s)
 */