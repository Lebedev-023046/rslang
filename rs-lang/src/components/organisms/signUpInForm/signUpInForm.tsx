import './signUpInForm.css'

import { FormBody } from '../../molecules/Registration/FormBody/FormBody'
import { FormHeader } from '../../molecules/Registration/FormHeader/FormHeader'
import { FormFooter } from '../../molecules/Registration/FormFooter/FormFooter'

export function SignUpInForm () {
  return (
    <form className='modal-content'>
      <FormHeader/>
      <FormBody/>
      <FormFooter/>
    </form>
  )
}
