import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.route';
import Category from './routes/category/category.route';
import SignIn from './routes/signin/sign-in.route';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="shop" element={<Category />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
