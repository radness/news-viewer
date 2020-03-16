// 해당 컴포넌트에서 API를 요청한다.
import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   // urlToImage: 'https://via.placeholder.com/160',
//   urlToImage:
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9k30f1Gpv5uC4Sc7-6xvBKrni9JU6bmfmAo5GaczWoCg8yfH_',
// };

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=aa1040815b9d4e5dbd9e8bc1b058aa7a`,
    );
  }, [category]);

  // 대기 중
  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }
  // response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // error가 발생했을 때
  if (error) {
    return <NewsListBlock>Error...</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
