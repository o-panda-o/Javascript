import React from 'react';

// Default value is specified which can be used anywhere
const UserContext=React.createContext('React context');

const UserProvider=UserContext.Provider;
const UserConsumer=UserContext.Consumer;

export {UserConsumer,UserProvider}

export default UserContext

// 1. Create the context