import React from "react"

const Greet=(props)=>{
    console.log('Rendering Greet');
    return (
        <div>
            <h1>Hello World!!!</h1> 
            <UserName name={props.name} />
        </div>
    )
}

// Extraction of components
const UserName=(user)=><h1>Welcome {user.name}</h1>

export default Greet;