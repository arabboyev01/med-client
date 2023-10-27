import DumbSignUpComponent from '@/components/SignUp/DumbSignUpComponent'
import { SignUpInput } from '@/types'
import { api } from '@/config'
import { useRouter } from 'next/router'

const SignUp = () => {

    const router = useRouter()
    const onSubmit = (values: SignUpInput) => {
        api.Users('api/sign-up', values)
            .then((data: SignUpInput) => {
                alert('you are signed up')
                localStorage.setItem('username', data.username)
            })
            .catch(err => console.log(err))
    }

    const handleRouter = (route: string) => router.push(route)

    return <DumbSignUpComponent onSubmit={onSubmit} handleRouter={handleRouter}/>
}

export default SignUp