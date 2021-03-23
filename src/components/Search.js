import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import NewsItem from './NewsItem';
import dotenv from 'dotenv';
import usePromise from '../lib/usePromise';

dotenv.config();

const NewsListBlock = styled.div`
    column-width: 300px;
    column-gap: 5px;
    box-sizing:border-box;
    padding-bottom: 3rem;
    max-width: 1300px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const Search = ({keyword}) => {

    const [loading, response, error] = usePromise(()=> {
        if(keyword === "") return <Redirect to="/"/>
        return axios.get(`http://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.REACT_APP_API_KEY}`)
    }
    , [keyword]);


    if(loading){
        return <NewsListBlock>Loading...</NewsListBlock>;
    }

    if(!response){
        return null;
    }

    if(error){
        return <NewsListBlock>error🚨</NewsListBlock>;
    }

    const { articles } = response.data;

    return (
        <NewsListBlock>
            {articles.map(article => <NewsItem key={article.url} article={article}/>)}
        </NewsListBlock>
    );

}

export default Search;