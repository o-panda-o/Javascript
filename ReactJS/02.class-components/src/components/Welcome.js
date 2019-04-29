/**
 * Importing React is necessary because it helps 
 * in rendering the JSX.
 */
import React,{Component}  from 'react'

class Welcome extends Component{
    render(){
        //return <h1>Class Component</h1>
        return React.createElement(
            'div',
            {
                id:'dummyId',
                className:'dummyClass'
            },
            React.createElement(
                'h1',
                null,
                'This is what happens when you don\'t use JSX'
            )
        );
    };
}

export default Welcome