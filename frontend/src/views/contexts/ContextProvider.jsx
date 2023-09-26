import {createContext, useContext, useState} from "react";

const StateContext =  createContext({
    user: null,
    token: null,
    toast: {
        message: null,
        variant: null,
        show: false
    },
    setUser: () => {},
    setToken: () => {},
})

export const ContextProvider = ({children}) => {
    const [ user, setUser ] = useState({})
    const [ token, _setToken ] = useState(localStorage.getItem('ACCESS_TOKEN'))

    const [ toast, setToast ] = useState({message: '', show: false})

    const showToast = (message, variant) => {
        setToast({message, variant, show: true})
        setTimeout(() =>{
            setToast({message: '', variant: '', show: false})
        }, 5000)
    }

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            toast,
            showToast
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
