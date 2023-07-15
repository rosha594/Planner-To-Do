import { Children, createContext, useEffect, useReducer} from "react"
import AuthReducer from "./AuthReducer"

const INTIIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
    userData:JSON.parse(localStorage.getItem("userInformation")) || null,
};

export const AuthContext = createContext(INTIIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INTIIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.currentUser))
        localStorage.setItem("userInformation", JSON.stringify(state.userData))
    },[state.currentUser,state.userData])
    return(
        <AuthContext.Provider value={{ currentUser: state.currentUser,userData: state.userData, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}