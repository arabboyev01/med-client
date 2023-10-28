import DumbDashboardComponent from '@/components/Dashboard/DumbDushboardComponent'
import { useEffect, useState } from 'react'
import { api } from '@/config'

const DashboardComponent = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        api.getPersons('api/user-data').then((data) => setData(data))
            .catch(err => console.log(err))
    }, [])

    if(data === null) return <h1>Loading</h1>

    return <DumbDashboardComponent data={data}/>
}

export default DashboardComponent