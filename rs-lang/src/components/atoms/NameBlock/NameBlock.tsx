import logout from '../../../assets/icons/logout.svg'
import Api from '../../../api/Api'
import { useContext, useState } from 'react'
import { authContext } from '../../../context/AuthContext/AuthContext'
import './NameBlock.css'
import { IUserRequest } from '../../../interfaces/IData'

export function NameBlock () {
    const [name, setName] = useState('')
    const { quit } = useContext(authContext)

    const handleLogOut = () => {
        quit()
        Api.logout()
      }

    void Api.getUser().then((userData) => setName((userData as unknown as IUserRequest).name))

    return (
        <div className='user-name'>
            <p>{ name }</p>
            <span onClick={handleLogOut} className='logout-icon-container'>
                <img className='logout-icon' src={logout} alt="logout" />
            </span>
        </div>
    )
}
