import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'technology',
        text: '기술'
    },
    {
        name: 'entertainment',
        text: '엔터테이먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'science',
        text: '과학'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    width:fit-content;
    background-color: #f7f1e6;
    border-radius: 35px;
    margin: 1rem auto;
    padding: 0 19px;
    @media screen and (max-width: 1300px){
        width: 100%;
        overflow-x: auto;
    }
`;
const Category = styled(NavLink)`
    font-size: 1rem;
    line-height: 2.4em;
    width: 150px;
    height: 40px;
    font-weight: bold;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    text-align: center;
    &:hover{
        background-color: #ffffff;
        color: #cc3333;
        

    }
    &.active{
        font-weight: 600;
        border-bottom: 2px solid #cc3333;
        color: #cc3333;
    }

`;

const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map(x => (
                <Category 
                key={x.name}
                activeClassName='active'
                exact={x.name === 'all'}
                to={x.name === 'all' ? '/' : `/${x.name}`}
                >{x.text}</Category>
            ))}
        </CategoriesBlock>
    )
}

export default Categories;