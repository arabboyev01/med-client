import DumbMobileComponent from '@/components/Mobile/DumbMobileComponent'
import { getLocation } from '@/utils/getLocation'
import { username } from '@/utils/username'
import { Router } from '@/utils/router'
import { api } from '@/config'

const MobileComponent = () => {
    const { handleRouter } = Router()
    const handleUserData = async () => {
        const location = await getLocation()
        api.Users('api/user-info', {username, location, calls: ['']}).then((data) => console.log(data))
            .catch(err => console.log(err))
    }

    return <DumbMobileComponent handleRouter={handleRouter} handleUserData={handleUserData}/>
}

export default MobileComponent