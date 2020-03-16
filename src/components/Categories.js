import React from 'react';
import styled, { css } from 'styled-components';

// 배열안에 name, text 객체를 만들어준다.
// name은 실제 카데고리 값, text는 렌더링할 때 사용핳 한글 카테고리 값
const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'helth',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'car',
    text: '자동차',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CartegoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Cartegory = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${props =>
    props.active &&
    css`
      font-swight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

// props로 전달받은 onSelect를 각 Category 컴포넌트의 onClick으로 설정
// 현재 선택된 카테고리 값에 따라 다른 스타일을 적용한다.
const Categories = ({ onSelect, category }) => {
  return (
    <CartegoriesBlock>
      {categories.map(c => (
        <Cartegory
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Cartegory>
      ))}
    </CartegoriesBlock>
  );
};

export default Categories;
