import { useAuthContext } from "./useAuthContext"



export const useLogout = () =>{
    const {dispatch} =useAuthContext()

    const logout = () => {
        //remove user from strorage
        localStorage.removeItem('customer')
        dispatch({type:'LOGOUT'})
    }
    return {logout}


}