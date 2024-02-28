import { useState } from "react";
import { useAuthContext } from "./useAuthContext.js";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Corrected typo and initialized isLoading with false
  const { dispatch } = useAuthContext(); // Corrected to call useAuthContext as a function
  const signup = async (email, password, lastname, firstname) => {
    setIsLoading(true);
    setError(null);

    
      const response = await fetch('http://localhost:5555/customer/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ email, password, lastname, firstname }),
      });
      const json = await response.json();
      if (!response.ok) {
        setIsLoading(false)
        setError(json.error);
      } 
      if (response.ok) {
        // save the user in local storage
        localStorage.setItem("customer", JSON.stringify(json))

        // update the auth context
        dispatch({ type: "LOGIN", payload: json })
         setIsLoading(false)
      }
    
  }
  return { signup, isLoading, error };
};
