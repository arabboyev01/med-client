import DumbLoginComponent from '@/components/Login/DumbLoginComponent'
import { LoginInputType, SignUpInput } from '@/types'
import { api } from '@/config'
import { useRouter } from 'next/router'

const LoginComponent = () => {
    const onSubmit = (values: LoginInputType) => {
         api.Users('api/login', values)
            .then((data: SignUpInput) => {
                localStorage.setItem('username', data.username)
               alert('you are logged in')
            })
            .catch(err => console.log(err))
    }
    const router = useRouter()
    const handleRouter = (route: string) => router.push(route)

    return <DumbLoginComponent onSubmit={onSubmit} handleRouter={handleRouter}/>
}

export default LoginComponent