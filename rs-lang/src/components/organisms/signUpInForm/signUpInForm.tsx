import './signUpInForm.css'

import { FormBody } from '../../Molecules/Registration/FormBody/FormBody'
import { FormFooter } from '../../Molecules/Registration/FormFooter/FormFooter'
import { FormHeader } from '../../Molecules/Registration/FormHeader/FormHeader'

export function SignUpInForm () {
  return (
    <form className='modal-content'>
      <FormHeader/>
      <FormBody/>
      <FormFooter/>
    </form>
  )
}
