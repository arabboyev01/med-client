import DumbSignUpComponent from '@/components/SignUp/DumbSignUpComponent'
import { SignUpInput } from '@/types'
import { api } from '@/config'

const SignUp = () => {

    const onSubmit = (values: SignUpInput) => {
        api.Users('api/sign-up', values)
            .then((data: SignUpInput) => {
                alert('you are signed up')
                localStorage.setItem('username', data.username)
            })
            .catch(err => console.log(err))
    }

    return <DumbSignUpComponent onSubmit={onSubmit}/>
}

export default SignUp