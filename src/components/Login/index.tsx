import DumbLoginComponent from '@/components/Login/DumbLoginComponent'
import { LoginInputType, SignUpInput } from '@/types'
import { api } from '@/config'

const LoginComponent = () => {
    const onSubmit = (values: LoginInputType) => {
         api.Users('api/login', values)
            .then((data: SignUpInput) => {
                localStorage.setItem('username', data.username)
               alert('you are logged in')
            })
            .catch(err => console.log(err))
    }

    return <DumbLoginComponent onSubmit={onSubmit}/>
}

export default LoginComponent