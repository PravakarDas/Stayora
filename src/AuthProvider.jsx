import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from 'firebase/auth';
import { auth } from './Firebase.init';

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)
    
    const[loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
         setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
         setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
     const LogOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{unSubscribe()}
    },[])
    const updateUserProfile=(profile)=>{
        setLoading(true)
        return updateCurrentUser(auth.currentUser,profile)

    }
    const userInfo={
       createUser,
       signInUser,
       LogOut,
       updateUserProfile,
       user,
       loading
    }
    return (
        
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;