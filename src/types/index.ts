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
    handleRouter: (value:string) => void
}

export interface LoginProp {
    onSubmit: (values: LoginInputType) => void
    handleRouter: (value:string) => void
}

export interface BUTTONS_DATA_TYPES {
    id: number
    name: string
    route: string
}
export interface UserProp {
    handleRouter: (value: string) => void
}