import { createContext, useEffect, useState} from 'react';
import axios from 'axios';

//create context for login and logout
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

    //login context
    const login = async (inputs) =>{
        const res = await axios.post('/auth/login',inputs);
        setCurrentUser(res.data);
    }

    //logout context
    const logout = async (inputs) =>{
        await axios.post('/auth/logout',inputs);
        setCurrentUser(null);
    }

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(currentUser));
    },[currentUser]);

    return(
        <AuthContext.Provider value={{currentUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}