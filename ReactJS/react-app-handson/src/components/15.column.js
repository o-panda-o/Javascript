import React from 'react'

function Columns() {
    const names=['Bibhuti','Bhusan','Bonty']
    return (
        // One more way of coding react fragement
        <>
        {
            names.map((name,index)=>(
                <React.Fragment key={index}>
                    <td>Name: </td>
                    <td>{name}</td>    
                </React.Fragment>            
            ))
        }
        </>
    )
}

export default Columns
