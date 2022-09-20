import React, { createContext, useState } from 'react'

interface IAuthContext {
    isAuth: boolean
    enter: () => void
    quit: () => void
}

export const authContext = createContext<IAuthContext>({
    isAuth: false,
    enter: () => {},
    quit: () => {}
})

export function AuthState ({ children }: { children: React.ReactNode }) {
    const [isAuth, setAuth] = useState(!(localStorage.getItem('signinLang') === null))

    const enter = () => setAuth(true)
    const quit = () => setAuth(false)

    return (
        <authContext.Provider value={{ isAuth, enter, quit }}>
            { children }
        </authContext.Provider>
    )
}
