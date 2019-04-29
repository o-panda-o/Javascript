import React,{Component} from "react";

class Welcome extends Component{
    render() {
      return(
          <div>
            <h1>I'm {this.props.name}, am now working as {this.props.role}</h1>
            {this.props.children} 
          </div>
      )
    }
}

export default Welcome;

/**
 * It is to be noted that in return statement only one statement
 * could be returned, it is the current problem with react, so enclose
 * everything with single div
 * 
 * {this.props.children} -- This statement is used to render the children.
 * 
 * {this.props.<something>}=<anotherThing> -- It'll break the code rather than doing anything.
 */