/**
 * Error Boundaries:
 *  - These are the react components that catch Javascript errors 
 *    anywhere in their child component tree, log those errors, and
 *    display a fallback UI instead of the component tree that's crashed.
 * 
 *  - Error boundaries catch errors during rendering, in lifecycle methods,
 *    and in constructors of the whole tree below them
 * 
 *  - Error boundaries don't catch errors for:
 *      1. Event handlers
 *      2. Asynchronous code(e.g. setTimeout)
 *      3. Server side rendering
 *      4. Error thrown in error boundaries itself(rather than its children)
 *  
 *  - Implementation Details:
 *      + A class component that implements either one or both of the lifecycle methods
 *        `getDerivedStateFromError` or `componentDidCatch` becomes an error boundary.
 *      + The static method `getDerivedStateFromError` method is used to render a fallback
 *        UI after an error is thrown & the `componentDidCatch` method is used to log the 
 *        error information.
 * 
 *  - Error boundaries work like Javascript catch {} block, but for components.
 * 
 *  - Only class components can be error boundaries
 *  
 *  - Granularity of using Error Boundaries are user dependent or requirement dependent.
 *    According to the situtation use it in the top level component or wrap them in 
 *    separate compoenent so as to avoid breaking whole UI.
 * 
 *  - As of React 16, errors that were not caught by any error boundaries will result in
 *    unmounting the whole react component tree. 
 * 
 *  - React 16 prints all errors that occurred during rendering to the console in development, 
 *    even if the application accidentally swallows them. Works by default with create-react-app
 *    or have to enable it manually. We should use it for dev environment only, should be disabled
 *    for production.
 * 
 *  - React components are not imperative, they are declarative so try, catch is not a good option
 *    for them. 
 */
import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    
    static getDerivedStateFromError(error){
        // Update state so that the next render will show the fallback UI
        return {
            hasError: true
        }
    }

    componentDidCatch(error,info){
        // Preferably log the error to an error reporting service
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary
