import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
    render() {
        /*
        // Approach 1: Using return statement is if-else
        if(this.state.isLoggedIn){
            message=<div>You are logged in</div>
            return (
                <div>You are logged in</div>
            )
        }else{
            return <div>You are not logged in</div>
        }
        */

        /*
        // Approach 2: Using return statement after storing data
        // inside another variable
        let message;
        if(this.state.isLoggedIn){
            message=<div>You are logged in</div>
            // return (
            //     <div>You are logged in</div>
            // )
        }else{
            message=<div>You are not logged in</div>
            // return <div>You are not logged in</div>
        }

        return(
            <div>{message}</div>
        )
        */

        /*
        // Approach 3: Using return statement with ternary operator
        return this.state.isLoggedIn ?
                <div>You are logged in</div>:
                <div>You are not logged in</div>
        */

        // Approach 4: This approach is only good if we want to do something or nothing
        // based on certain condition.
        return this.state.isLoggedIn && <div>Welcome, you are logged in</div>
        
    }
}

export default UserGreeting
