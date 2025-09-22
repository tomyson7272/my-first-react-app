import { createContext, useContext, useReducer } from "react";
import signUpReducer, { initialState } from "../reducers/SignUpFormReducer";

const UserContext = createContext();

export function UserProvider({ children }) {
  const userData = {
    name: "Akin Adejuwon",
  };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
