import { InputField, SignUpButton, SignUpContainer, SignUpForm } from '@/components/SignUp/signup.style'
import { Field, Form } from 'react-final-form'
import { SIGN_UP_CONFIGS } from '@/InputConfigs'
import type { FC } from 'react'
import { LoginProp } from '@/types'
import { Button } from '@/components/Home/style.home'

const DumbLoginComponent: FC<LoginProp> = ({onSubmit, handleRouter}) => (
    <SignUpContainer>
        <SignUpForm>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <InputField>
                            <label htmlFor="username">{SIGN_UP_CONFIGS.username.label}</label>
                            <Field {...SIGN_UP_CONFIGS.username} component='input'/>
                        </InputField>
                        <InputField>
                            <label htmlFor="password">{SIGN_UP_CONFIGS.password.label}</label>
                            <Field {...SIGN_UP_CONFIGS.password} component='input'/>
                        </InputField>
                        <SignUpButton type='submit'>Sign Up</SignUpButton>
                    </form>
                )}
            />
            <Button onClick={() => handleRouter('/mobile')}>Go To Main page</Button>
        </SignUpForm>
    </SignUpContainer>
)

export default DumbLoginComponent