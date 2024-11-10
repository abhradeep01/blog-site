import { createContext, useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//create context for login and logout
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
    const navigate = useNavigate();

    //login context
    const login = async (inputs) =>{
        await axios.post('/auth/login',inputs);
        setCurrentUser(inputs);
    }

    //logout context
    const logout = async (inputs) =>{
        await axios.post('/auth/logout');
        setCurrentUser(null);
        navigate('/login');
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