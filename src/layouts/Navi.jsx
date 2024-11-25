
import React from 'react'
import CartSummary from './CartSummary'

import {


    MenuMenu,
    MenuItem,
    Menu,
    Container,
} from 'semantic-ui-react'
import { useState } from 'react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const { cartItems } = useSelector(state => state.cart)
    const navigate = useNavigate()
    function handleSignOut(params) {
        setIsAuthenticated(false)
        navigate('/', { replace: true });
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <MenuItem
                        name='home'

                    />
                    <MenuItem
                        name='messages'

                    />

                    <MenuMenu position='right'>
                        {cartItems.length > 0 && <CartSummary />}
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </MenuMenu>
                </Container>
            </Menu>
        </div>
    )
}
