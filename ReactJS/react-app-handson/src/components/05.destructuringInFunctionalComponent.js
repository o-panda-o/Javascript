import React from "react"

export const KnowDesignation = props => {
    const {name,designation}=props
    return(
        <div>
            <h1>
                Hello {name}, you are hired for {designation} role.
            </h1>
        </div>
    )
}

export const KnowExpectedDesignation = ({name,designation}) => {
    return(
        <div>
            <h1>
                Hello {name}, you are expected to join in {designation} role.
            </h1>
        </div>
    )
}
/**
 * This is how destructuring is done for props in functional components.
 * 
 * Also the same way could be used to do the same for class components for both props 
 * & states, difference being using `this.props` instead of `props`
 */