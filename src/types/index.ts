export interface SignUpInput {
    fullName: string
    username: string
    password: string
}

export interface LoginInputType {
    username: string
    password: string
}

export interface SignUpProp {
    onSubmit: (values: SignUpInput) => void
}

export interface LoginProp {
    onSubmit: (values: LoginInputType) => void
}