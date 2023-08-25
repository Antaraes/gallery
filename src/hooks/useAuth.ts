"use client";
import { AuthContext, AuthContextType } from "@/context/auth";
import { useContext } from "react";

function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}

export default useAuth;
