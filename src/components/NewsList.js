import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
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

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_API_KEY}`);
    }, [category]);

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
};

export default NewsList;