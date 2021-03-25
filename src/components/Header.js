import React, {useState} from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import { Link } from 'react-router-dom';

const MainHeader = styled.div`
    max-width: 1300px;
    width: 100%;
    height: 220px;
    text-align: center;
    margin: 0 auto;
`

const Logo = styled.div`
    text-align: center;
    padding: 50px;
    margin-top: 50px;
`;

const SearchBox = styled.div`
    float: left;
    margin-left: 10%;
`;

const Search = styled.input`
    padding: 7px 5px;
    border: none;
    border-radius: 35px;
    background-color: #f7f1e6;
`;
const SearchBtn = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 30px;
    margin-left: 5px;
    background-color: #f7f1e6;
    border: none;
    position: relative;
    left: -35px;
`;

const Header = () => {
    const [keyword, setKeyword] = useState("");
    return (
        <MainHeader>
            <SearchBox>
                <Search type="text" onChange={(e)=>{setKeyword(e.target.value)}}/>
                <Link to={keyword === ""? `/` : `/search/${keyword}`}><SearchBtn><i className="fas fa-search"></i></SearchBtn></Link>
            </SearchBox>
            <Logo><img src='./goNEWS_logo.png' alt='logo' width='160px'/></Logo>
            <Categories />
        </MainHeader>
    )
}

export default Header;