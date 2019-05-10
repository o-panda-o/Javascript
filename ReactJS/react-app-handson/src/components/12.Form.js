import React, { Component } from 'react'

/**
 * Note: LifeCycle methods are only present in class components, not in functional ones
 * 
 * Lifecycle methods:
 *  + Mounting(constructor, getDerivedStateFromProps(static), render & componentDidMount)
 *  + Updating(getDerivedStateFromProps(static), shouldComponentUpdate, render, getSnapshotBeforeUpdate & componentDidUpdate)
 *  + Unmounting(componentWillUnmount)
 *  + Error Handling(getDerivedStateFromError(static),componentDidCatch)
 */
class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    
    // It just so happens that when you assign a handler to the onChange event
    // the event itself is passed as parameter to the handler.  
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        // Destructuring for code cleanup
        const {username,comments,topic}=this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:   </label> 
                    <input 
                        type='text' 
                        value={username} 
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea 
                        value={comments}
                        onChange={this.handleCommentsChange}
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select 
                        value={topic} 
                        onChange={this.handleTopicChange}
                    >
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
