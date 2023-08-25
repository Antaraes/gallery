"use client";
import { auth } from "@/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";
import { FC, createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

// Define the type for the context
export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  googleSignIn: () => void;
  logOut: () => void;
}

// Create the context with an initial value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props for the AuthContextProvider
interface AuthProviderProps {
  children: React.ReactNode;
}

// AuthContextProvider component
export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Start with isLoading as true

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false); // Set isLoading to false after user state is set
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []); // Remove 'user' from the dependency array to avoid unnecessary updates

  const value: AuthContextType = {
    user,
    isLoading,
    googleSignIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
