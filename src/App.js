import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // category 상태를 useState로 관리한다.
  // const [category, setCategory] = useState('all');
  // category 값을 update하는 onSelect 함수
  // const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
      {/* path에 /:category?와 같은 형태로 물음표가 들어가 있는건 category값이 선택적(optional)이라는 것 */}
      <Route path="/:category?" component={NewsPage} />;
    </>
  );
};

export default App;
