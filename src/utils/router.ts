import { useRouter } from 'next/router'

export const Router = () => {
    const router = useRouter()
    const handleRouter = (route: string) => router.push(route)

    return {
        ...router,
        handleRouter
    }
}