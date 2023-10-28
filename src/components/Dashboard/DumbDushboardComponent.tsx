import { StyleDashboard } from '@/components/Dashboard/style.dashboard'
import type { FC } from 'react'
import { DataProps } from '@/types'
import FetchDataAndRenderGrid from '@/utils/FetchDataGrid'

const DumbDashboardComponent: FC<DataProps> = ({data}) => (
    <StyleDashboard>
        <FetchDataAndRenderGrid originalData={data}/>
    </StyleDashboard>
)

export default DumbDashboardComponent