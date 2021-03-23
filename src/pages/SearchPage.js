import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';


const SearchPage = ({ match }) => {
    const keyword = match.params.keyword;
    console.log(keyword);
    return (
        <>
        <Header />
        <Search keyword={keyword} />
        </>
    );
};

export default SearchPage;