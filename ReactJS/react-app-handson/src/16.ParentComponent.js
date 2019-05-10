import React, { Component } from 'react'
import RegComponent from './16.RegularComponent';
import PureComp from './16.PureComponent';

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Bibhuti'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Bibhuti'
            })
        },2000)
    }
    
    render() {
        console.log("*******************Parent component render****************************")
        return (
            <div>
                Parent Component
                <RegComponent name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
/**
 * Regular vs Pure Component:
 *  + A regular component doesn't implement the `shouldComponentUpdate` method. It always returns true.
 *    A pure component on the other hand implements the `shouldComponentUpdate` with a shallow props & state comparision
 */

 /**
  * Shallow Comparision:
  *     + Primitive Types:
  *         a (SC) b returns true if a and b have same value and are of same type.
  *     + Complex Types:
  *         a (SC) b returns true is a and b reference the same exact object(doesn't matter if they have same
  *         content, they have to refer to the same reference.)
  */
 /**
  * Note:
  *     + Don't mutate the props in case of pure components because it won't re-render as both will point
  *       to the same reference, rather return a new object for rendering.(Use regular component in most of the cases)
  */