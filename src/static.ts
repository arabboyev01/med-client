import { BUTTONS_DATA_TYPES } from '@/types'
import { GridColDef } from '@mui/x-data-grid';
export const BUTTONS_DATA: BUTTONS_DATA_TYPES[] = [
    {
        id: 1,
        name: 'Dashboard',
        route: '/dashboard'
    },
    {
        id: 2,
        name: 'Mobile',
        route: '/mobile'
    }
]

export const BUTTON_ROUTE: BUTTONS_DATA_TYPES[] = [
    {
        id: 1,
        name: 'Login',
        route: '/login'
    },
    {
        id: 2,
        name: 'Sign Up',
        route: '/sign-up'
    }
]

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 400,
    editable: true,
  },
  {
    field: 'username',
    headerName: 'Username',
    width: 400,
    editable: true,
  },
    {
        field: 'address',
        headerName: 'Address',
        width: 400,
    }
];
