import React from 'react'

function MemoComponent({name}) {
    console.log('Rendering memo component')
    return (
        <div>
           Rendering name from memo component as:  {name}
        </div>
    )
}

export default React.memo(MemoComponent)