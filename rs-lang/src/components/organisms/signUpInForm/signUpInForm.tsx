import { FormBody } from '../../molecules/Registration/FormBody/FormBody'
import { FormFooter } from '../../molecules/Registration/FormFooter/FormFooter'
import { FormHeader } from '../../molecules/Registration/FormHeader/FormHeader'
import './signUpInForm.css'

export function SignUpInForm () {
  return (
    <form className='modal-content'>
      <FormHeader/>
      <FormBody/>
      <FormFooter/>
    </form>
  )
}
