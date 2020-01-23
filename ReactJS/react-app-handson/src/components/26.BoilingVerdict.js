import React from 'react'

export default function BoilingVerdict(props) {
    if(props.celsius>100)
        return <h1>Water would boil</h1>;
    return <h1>Water won't boil</h1>;
}
