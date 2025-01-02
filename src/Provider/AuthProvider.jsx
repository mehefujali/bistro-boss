/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.init";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
      
      const googleProvider  = new GoogleAuthProvider()
      const googleSignIn =  () => {
            return signInWithPopup(auth , googleProvider)
      }
      const emailSignUp = (email,password) => {
            return createUserWithEmailAndPassword(auth , email , password)
      }
      const emailLogin = (email , password)  =>{
            return signInWithEmailAndPassword(auth,email,password)
      }
   
      const authInfo = {
            googleSignIn ,
            emailSignUp ,
            emailLogin

      }
      return (
           <AuthContext.Provider  value={authInfo}>
            {
                  children
            }
           </AuthContext.Provider>
      );
};

export {AuthContext , AuthProvider}