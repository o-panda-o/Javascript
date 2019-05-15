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
 *  + 
 */