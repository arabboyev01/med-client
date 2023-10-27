import { Button, Buttons, StyleHome } from '@/components/Home/style.home'
import { BUTTONS_DATA } from '@/static'
import { useRouter } from 'next/router'
import { BUTTONS_DATA_TYPES } from '@/types'

const HomeComponent = () => {
    const router = useRouter()
    const handleRouter = (route: string) => router.push(route)

    return (
        <StyleHome>
            <Buttons>
                {BUTTONS_DATA.map(({id, name, route}: BUTTONS_DATA_TYPES) =>
                    <Button key={id} onClick={() => handleRouter(route)}>{name}</Button>
                )}
            </Buttons>
        </StyleHome>
    )
}

export default HomeComponent