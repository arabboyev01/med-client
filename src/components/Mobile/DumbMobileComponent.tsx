import { MobileHeader, StartButton, StyleMobile } from '@/components/Mobile/style.mobile'
import { BUTTON_ROUTE } from '@/static'
import { BUTTONS_DATA_TYPES, UserProp } from '@/types'
import { Button } from '@/components/Home/style.home'
import type { FC } from 'react'

const DumbMobileComponent: FC<UserProp> = ({handleRouter, handleUserData}) => (
    <StyleMobile>
        <MobileHeader>
            {BUTTON_ROUTE.map(({id, name, route}: BUTTONS_DATA_TYPES) =>
                <Button key={id} onClick={() => handleRouter(route)}>{name}</Button>
            )}
        </MobileHeader>
        <StartButton onClick={handleUserData}>Start</StartButton>
    </StyleMobile>
)
export default DumbMobileComponent