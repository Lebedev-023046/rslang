import React, { createContext, useState } from 'react'

interface IModalContext {
    signInUpModal: boolean
    openSIU: () => void
    closeSIU: () => void
}

export const signInUpContext = createContext<IModalContext>({
    signInUpModal: false,
    openSIU: () => {},
    closeSIU: () => {}
})

export function ModalState ({ children }: { children: React.ReactNode }) {
    const [signInUpModal, setSignInUpModal] = useState(false)

    const openSIU = () => setSignInUpModal(true)
    const closeSIU = () => setSignInUpModal(false)

    return (
        <signInUpContext.Provider value={{ signInUpModal, openSIU, closeSIU }}>
            { children }
        </signInUpContext.Provider>
    )
}
