import React, {useState} from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import { Link } from 'react-router-dom';

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

const SearchBox = styled.input`

`;
const SearchBtn = styled.button``;

const Header = () => {
    const [keyword, setKeyword] = useState("");
    return (
        <MainHeader>
            <SearchBox type="text" onChange={(e)=>{setKeyword(e.target.value)}}/>
            <Link to={`/search/${keyword}`}><SearchBtn>검색</SearchBtn></Link>
            <Logo><img src='./goNEWS_logo.png' alt='logo' width='160px'/></Logo>
            <Categories />
        </MainHeader>
    )
}

export default Header;