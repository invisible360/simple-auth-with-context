import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const UserContecxt = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading (true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading (true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading (true);
        return signOut(auth);
    }

    const [user, setUser] = useState(null);

    useEffect(() => {
        
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading (false);
        });
        return () => unSubscribe()

    }, [])

    const authInfo = { user,loading, createUser, signInUser, logOut };


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContecxt;