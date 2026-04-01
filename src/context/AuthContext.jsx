import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "../hooks/use-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isLoading: true,
    isLoginOpen: false,
    isSignupOpen: false,
  });

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("greenlife-user");
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setState((prev) => ({ ...prev, user, isLoading: false }));
      } catch {
        localStorage.removeItem("greenlife-user");
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    } else {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email, password) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful login
      const user = {
        id: "1",
        email,
        name: email.split("@")[0],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };

      localStorage.setItem("greenlife-user", JSON.stringify(user));
      setState((prev) => ({
        ...prev,
        user,
        isLoading: false,
        isLoginOpen: false,
      }));

      toast({
        title: "Welcome back!",
        description: `Good to see you again, ${user.name}!`,
      });
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    }
  };

  const signup = async (name, email, password) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful signup
      const user = {
        id: Date.now().toString(),
        email,
        name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };

      localStorage.setItem("greenlife-user", JSON.stringify(user));
      setState((prev) => ({
        ...prev,
        user,
        isLoading: false,
        isSignupOpen: false,
      }));

      toast({
        title: "Account created!",
        description: `Welcome to GreenLife, ${user.name}!`,
      });
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
      toast({
        title: "Signup failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("greenlife-user");
    setState((prev) => ({ ...prev, user: null }));
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const openLogin = () =>
    setState((prev) => ({ ...prev, isLoginOpen: true, isSignupOpen: false }));
  const closeLogin = () =>
    setState((prev) => ({ ...prev, isLoginOpen: false }));
  const openSignup = () =>
    setState((prev) => ({ ...prev, isSignupOpen: true, isLoginOpen: false }));
  const closeSignup = () =>
    setState((prev) => ({ ...prev, isSignupOpen: false }));

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        signup,
        logout,
        openLogin,
        closeLogin,
        openSignup,
        closeSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
