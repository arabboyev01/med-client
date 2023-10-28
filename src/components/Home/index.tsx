import { Button, Buttons, StyleHome } from '@/components/Home/style.home'
import { BUTTONS_DATA } from '@/static'
import { BUTTONS_DATA_TYPES } from '@/types'
import { Router } from '@/utils/router'

const HomeComponent = () => {
    const { handleRouter } = Router()

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