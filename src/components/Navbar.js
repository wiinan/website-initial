import React from 'react'
import 'styled-components/macro';
import {NavbarContainer,Input, NavbarWrap,NavLink,Nav,Search,SearchWrap,Logo, Button,ButtonContainer} from './styles/NavbarStyle';

export default function Navbar() {
    return (
        <NavbarContainer>
            <NavbarWrap>
                <Logo />
                <Nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Mercado</NavLink>
                    <NavLink to='/'>Trade</NavLink>
                    <NavLink to='/'>Preço</NavLink>
                    <NavLink to='/'>Download</NavLink>
                    <NavLink to='/'>Ajuda</NavLink>
                </Nav>
                <Search>
                    <SearchWrap>
                        <Input type='text' placeholder='Symbol/name' />
                    </SearchWrap>
                </Search>
                <ButtonContainer>
                    <Button css={`color:#037cff;background:#fff;`}>Registrar</Button>
                    <Button>Logar</Button>
                </ButtonContainer>
            </NavbarWrap>
        </NavbarContainer>
    )
}
