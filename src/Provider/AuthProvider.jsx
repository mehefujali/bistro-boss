/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic()
  const [user, setUser] = useState(null);
  const [loding , setLoding] = useState(true)
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (data) => {
     return updateProfile(auth.currentUser ,data)
  }
  const signOutUser = () =>{
      signOut(auth)
      
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        //get token and store clinent
        const userInfo = {
          email: currentUser.email
        }
        axiosPublic.post('/jwt' , userInfo)
        .then(res=>{
          
          if(res.data.token){
            localStorage.setItem('access-token' , res.data.token)
          }
        })
      }
      else{
        localStorage.removeItem('access-token')
        //todo remove token (if token stored in the clint side)
      }
      setLoding(false)
    });

    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    googleSignIn,
    emailSignUp,
    emailLogin,
    user,
    signOutUser,
    loding ,
    updateUser,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
