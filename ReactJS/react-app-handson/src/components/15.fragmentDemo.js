import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>Fragement Demo</h1>
      <p>This describes the Fragment Demo component</p>
    </React.Fragment>
  )
}

export default FragmentDemo

/**
 * Fragments:
 *  - A common pattern in react is for a component to return multiple
 *   elements. Fragments let you group a list of children without adding 
 *   extra nodes to DOM.
 */
