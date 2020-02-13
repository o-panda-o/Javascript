import React from "react";
// HOC Pattern(Higher Order Component):
// Kind of standard convention:
//  1. Use name of the arrow function as file name(Here can't do)
//  2. Use name of the class in pascal case of file name
const withCounter=(WrappedComponent,incrementNumber)=>{
    class WithCounter extends React.Component{

        constructor(props) {
            super(props)
        
            this.state = {
                count:0
            }
        }
        
        incrementCount=()=>{
            this.setState(prevState=>{
                return {
                    count:prevState.count+incrementNumber
                }
            })
        }
        render(){
            /**
             * Destructuring doesn't work
             */
            const count=this.state.count 
            // The props is passed to the HOC but not to the component which is wrapped
            // We need to use the `spread operator` to pass down the remaining props to the 
            // `WrappedComponent`
            console.log("From HOC",this.props.name)
            return <WrappedComponent 
                        incrementCount={this.incrementCount} 
                        count={count}
                        {...this.props}
                    />
        }
    }
    return WithCounter
}

export default withCounter

/**
 * Point to be noted:
 *  + When you create a HOC don't forget to pass down the remaining props.
 *  + HOC is an advanced technique in React for reusing component logic. 
 *  + Not a part of React API. They are pattern that emerges from React's 
 *    compositional nature. 
 *  + A HOC is a function that takes a compoenent and returns a new component.
 *  + Whereas a component transforms props => UI, 
 *    HOC transforms component => another component
 *  + HOC doesn't modify the input component, nor does it use inheritance to
 *    copy its behaviour. Rather, it `composes` the original component by 
 *    `wrapping` it in a container component. A HOC is a pure function with 
 *     zero side-effects.
 *  + The wrapped component receives all the props of the container, along with
 *    a new prop, `data`, which it uses to render its output. 
 */

 /**
  * Special Conerns:
  *     + Don't mutate the original component, rather use composition.
  *     + Pass unrelated props through the `Wrapped Component`(can use spread operator)
  *     + Wrap the display name inside the function for easy debugging.
  *     + Composability maximization is very much necessary.
  *     + Caveats:
  *         ~ Don't use HOCs inside the render method
  *         ~ Static methods must be copied over
  *         ~ Refs are not passed through
  */