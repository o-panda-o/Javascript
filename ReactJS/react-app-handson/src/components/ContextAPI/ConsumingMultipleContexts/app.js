import React, { Component, createContext } from 'react'
const ThemeContext=createContext('light');
const UserContext=createContext('Guest');

export class ConsumingMultipleContexts extends Component {
    render() {
        const{signedInUser,theme}=this.props;
        return (
            <div>
                <ThemeContext.Provider value={theme}>
                    <UserContext.Provider value={signedInUser}>
                        <Layout />
                    </UserContext.Provider>
                </ThemeContext.Provider>
            </div>
        )
    }
}

const Layout=()=>{
    return(
        <div>
            <TopBar />
            <Content />
        </div>
    )
}

const TopBar=()=>{
    return <h1>Sidebar</h1>;
}

const Content=()=>{
    return(
        <ThemeContext.Consumer>
            {
                theme=>(
                    <UserContext.Consumer>
                        {
                            user=>(
                                <ProfilePage user={user} theme={theme}/>
                            )
                        }
                    </UserContext.Consumer>
                )
            }
        </ThemeContext.Consumer>
    );
}

const ProfilePage=({user,theme})=>{
    return <h1>{user} --- {theme}</h1>;
}

export default ConsumingMultipleContexts
