import React from 'react';
import Header from '../components/Header';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
    const category = match.params.category || 'all';

    return (
        <>
        <Header />
        <NewsList category={category} />
        </>
    );
};

export default NewsPage;