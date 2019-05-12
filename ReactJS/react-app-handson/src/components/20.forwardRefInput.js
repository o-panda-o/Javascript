import React from 'react'

// Step 3: Forwading the ref using existing react library
// Generally a component get props as its parameter but when we do it \
// inside createRef, it gets `ref` as an additional parameter. This is how 
// `ref` is forwaded from parent component to the native input element, by getting
// its forwaded value first from the below method.
const FRInput=React.forwardRef((props,ref)=>{
  return (
    <div>
      <input type="text" ref={ref}/>    
    </div>
  )
})

export default FRInput
