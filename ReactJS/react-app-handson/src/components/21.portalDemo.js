import React from 'react'
import ReactDOM from 'react-dom'
// Event bubbling is a great feature in react, that is even if an action
// done in one DOM it propagates to other react tree irrespective of its 
// ancestors.
function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>
            Portals Demo
        </h1>,
        document.getElementById('portal-root')
        
    )
}

export default PortalDemo
