import { SignUpContainer, SignUpForm, InputField, SignUpButton } from '@/components/SignUp/signup.style'
import { SIGN_UP_CONFIGS } from '@/InputConfigs'
import { Form, Field } from 'react-final-form';
import { FC } from 'react'
import { SignUpProp } from '@/types'
import { Button } from '@/components/Home/style.home'

const DumbSignUpComponent: FC<SignUpProp> = ({onSubmit, handleRouter}) => (
    <SignUpContainer>
        <SignUpForm>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <InputField>
                            <label htmlFor="fullName">{SIGN_UP_CONFIGS.fullName.label}</label>
                            <Field {...SIGN_UP_CONFIGS.fullName} component='input'/>
                        </InputField>
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

export default DumbSignUpComponent