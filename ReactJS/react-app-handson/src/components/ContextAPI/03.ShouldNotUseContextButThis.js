/**
 * Better way of doing stuff without context API
 * 
 * This pattern is sufficient for many cases when you need to decouple a child from its immediate parents
 */
import React from 'react'

export const GoodPage=({user,avatarSize})=>{
    const userLink=(
        <Link user={user}>
            <Avatar user={user} avatarSize={avatarSize} />
        </Link>
    );
    return(
        <PageLayout userLink={userLink} />   
    )
}

const PageLayout=({userLink})=>{
    return(
        <NavigationBar userLink={userLink} />
    )
}

const NavigationBar=({userLink})=>{
    return(
        {userLink}
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

