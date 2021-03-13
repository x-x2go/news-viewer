import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';

const MainHeader = styled.div`
    width: 100%;
    height: 220px;
    text-align: center;
`

const Logo = styled.div`
    text-align: center;
    padding: 50px;
    margin-top: 50px;
`;

const Header = () => {
    return (
        <MainHeader>
        <Logo><img src='./goNEWS_logo.png' alt='logo' width='160px'/></Logo>
        <Categories />
        </MainHeader>
    )
}

export default Header;