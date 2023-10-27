import DumbMobileComponent from '@/components/Mobile/DumbMobileComponent'
import { useRouter } from 'next/router'

const MobileComponent = () => {

    const router = useRouter()
    const handleRouter = (route: string) => router.push(route)

    return <DumbMobileComponent handleRouter={handleRouter}/>
}

export default MobileComponent