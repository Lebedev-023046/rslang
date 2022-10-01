import logout from '../../../assets/icons/logout.svg'
import Api from '../../../api/Api'
import { useContext, useState } from 'react'
import { authContext } from '../../../context/AuthContext/AuthContext'
import './NameBlock.css'

export function NameBlock () {
    const [name, setName] = useState('')
    const { quit } = useContext(authContext)

    const handleLogOut = () => {
        quit()
        Api.logout()
      }

    void (async () => {
        const response = await Api.getUser()
        if (typeof response !== 'string') {
            const { name } = response
            setName(name)
        }
      })()

    return (
        <div className='user-name'>
            <p>{ name }</p>
            <span onClick={handleLogOut} className='logout-icon-container'>
                <img className='logout-icon' src={logout} alt="logout" />
            </span>
        </div>
    )
}
