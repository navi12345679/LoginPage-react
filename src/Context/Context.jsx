import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', email: '' });

    const updateUser = (newUser) => {
        console.log('New User:', newUser); // Print the newUser object
        setUser(newUser);
    };

    return (
        <UserContext.Provider value={ {user, updateUser }}>
            {children}     
        </UserContext.Provider>
    );
};
