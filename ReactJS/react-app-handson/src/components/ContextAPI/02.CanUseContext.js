/**
 * Here we can use context API but there are better ways of doing it
 */

import React from 'react'

export const DirtyPage=({user,avatarSize})=>{
    return(
        <PageLayout user={user} avatarSize={avatarSize} />   
    )
}

const PageLayout=({user,avatarSize})=>{
    return(
        <NavigationBar user={user} avatarSize={avatarSize} />
    )
}

const NavigationBar=({user,avatarSize})=>{
    return(
        <Link user={user}>
            <Avatar user={user} avatarSize={avatarSize} />
        </Link>
    )
}

const Link=({user,children})=>{
    return(
        <div>
            <h1>Getting the link for the user {user}</h1><br />
            {children}
        </div>
    )
}

const Avatar=({user,avatarSize})=>{
    return(
        <div>
            <h1>{user}</h1>
            <h2>{avatarSize}</h2>
        </div>
    )
}

