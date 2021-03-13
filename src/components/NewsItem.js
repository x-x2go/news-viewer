import React from 'react';
import styled from  'styled-components';

const NewsItemBlock = styled.div`
    width: 300px;
    padding-bottom: 40px;
    margin-bottom: 30px;
    display: inline-block;
    background-color: #ffffff;

    &.onlyText{
        text-align: center;
        color: #ffffff;
        background-color: ${(props) => ( props.colorNum ? '#cc3333' : '#86746d'
    )}; 
        a{
            color: #ffffff;
        }
    }

    .thumbnail{
        img{
            display:block;
            width: 100%;
        }
    }
    .contents{
        padding: 25px;
        height: fit-content;
        
        h2{
            font-weight: bold;
            line-height: 1.8;
            margin: 10px 0px;
            font-size: 17px;
            
        }
        p{
            height: fit-content;
            line-height: 1.8;
            margin-top: 1rem;
            overflow: hidden;
            white-space: normal;
            display: -webkit-box;
            word-wrap: break-word;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
        }
    }
`;

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    const colorNumber = Math.floor(Math.random()*2);

    return (
        <NewsItemBlock className={urlToImage? "" : "onlyText"} colorNum={colorNumber}>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}

export default NewsItem;