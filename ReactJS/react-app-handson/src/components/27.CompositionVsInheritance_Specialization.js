/**
 * Specialization:  
 */
import React, { Component } from 'react'

const FancyBorder=(props)=>{
    return(
        <div className={'FancyBorder - '+props.color}>
            {props.children}
        </div>
    );
}

 const Dialog=(props)=>{
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

export class SignUpDialog extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             login:''
        }
    }

    handleChange=(event)=>{
        this.setState({
            login:event.target.value
        })
    }

    handleSignUp=()=>{
        alert(`Welcome aboard, ${this.state.login}!`);
    }
    

    render() {
        return (
            <div>
                <Dialog title="Mars Exploration Program"
                        message="How should we refer to you ?" />
                <input value={this.state.login} onChange={this.handleChange} /><br />
                <button onClick={this.handleSignUp}>Sign Me Up</button>
            </div>
        )
    }
}

export default SignUpDialog
