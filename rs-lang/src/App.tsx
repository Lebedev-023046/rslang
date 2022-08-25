import { useContext } from 'react'
import { Modal } from './components/organisms/Modal/Modal'
import { SignUpInForm } from './components/organisms/signUpInForm/signUpInForm'
import { signInUpContext } from './context/ModalContext/ModalContext'

function App () {
  const { signInUpModal, openSIU, closeSIU } = useContext(signInUpContext)
  return (
    <>
    <button onClick={openSIU}>Open Modal</button>

    {signInUpModal && <Modal onClose={closeSIU}>
        <SignUpInForm/>
    </Modal>}
    </>
  )
}

export default App
