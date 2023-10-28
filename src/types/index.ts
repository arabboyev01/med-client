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
    handleRouter: (value: string) => void
}

export interface LoginProp {
    onSubmit: (values: LoginInputType) => void
    handleRouter: (value: string) => void
}

export interface BUTTONS_DATA_TYPES {
    id: number
    name: string
    route: string
}

export interface UserProp {
    handleRouter: (value: string) => void
    handleUserData: () => void
}

export interface LocationTypes {
    username: string | null
    location: {
        latitude: number
        longitude: number
    },
    calls: string[]
}

export type UsersDataProps = {
  id: number;
  location: string;
  calls: string[];
  user: {
    id: number;
    fullName: string;
    username: string;
    password: string;
  };
  userId: number;
}

export interface DataProps {
    data: UsersDataProps[]
}
export interface DashboardDataProp {
    originalData: UsersDataProps[]
}
export interface DataReturnsTypes {
  id: number;
  fullName: string;
  username: string;
  address: string
}