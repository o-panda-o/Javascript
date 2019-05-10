import React from 'react'
import './11.mystyles.css'
import './11.appStyles.css'
import style from './appStyles.module.css'

const heading={
    fontSize:'72px',
    color:'blue'
}

function Stylesheets(props) {
    let className=props.primary?'primary':'';
    return (
        <div>
            <h1 className={`${className} font-xl`}>External Stylesheets(Use external CSS file for styling)</h1>
            <h2 style={heading}>Inline Stylesheets(Create an object and apply it in style attribute)</h2>
            <h2 className='heading'>CSS Module Stylesheets</h2>
            <h2 className={style.description}>(It has a strict naming convention $camelCase$.module.css)</h2>
        </div>
    )
}

export default Stylesheets
