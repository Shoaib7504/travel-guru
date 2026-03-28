import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
// const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Set an authentication state observer and get user data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            setLoading(false);
            unsubscribe();
        }
    }, [])

    // To sign out a user, call signOut:
    const Logout = () => {
        return signOut(auth).then(() => {
            alert('Sign-out successful')
        }).catch((error) => {
            console.log(error);


        });
    }

    //  Sign in existing users

    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const AuthData = {
        user,
        setUser,
        createUser,
        Logout,
        LogIn,
        loading,
        setLoading
    }
    return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;