import React from 'react';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

const App = () =>{
  return (
    <main>
      <Route exact path='/:category?' component={NewsPage}/>
      <Route path='/search/:keyword?' component={SearchPage}/>
    </main>
  );
} 

export default App;
