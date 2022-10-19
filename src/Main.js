import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sky from './pages/Sky';
import TheBookOfAnswers from './pages/TheBookOfAnswers';

const Main = () => {
  return (
    <Routes> {/* The Routes decide which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/sky' element={<Sky />}></Route>
      <Route exact path='/thebookofanswers' element={<TheBookOfAnswers />}></Route>
    </Routes>
  );
}

export default Main;