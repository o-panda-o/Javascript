/**
 * props vs state:
 *  + props get passed to the component -- state is managed within component
 *  + Analogy: Function parameters -- Variables declared inside function body
 *  + props are immutable -- state can be changed
 *  + props(Functional Component), this.props(Class Component) -- 
 *    useState Hook(Functional Component), this.state(Class component)
 */

/**
 * A state is an object that is privately maintained inside a component.
 */
import React,{Component} from "react"

class Message extends Component{
    constructor(){
        // This is required because we extend component so we nee
        // to invoke the base class constructor.
        super(); 
        this.state={
            message:'Please click to the subscribe button to see example of state change'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for clicking the subscribe button.'
        })
    }

    /**
     * This way of invoking method on click is bad design because everytime the button
     * is clicked it simply invokes a new instance of method and uses memory unnecessarily.
     */
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>    
            </div>
        )
    }
}

export default Message