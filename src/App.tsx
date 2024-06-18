import React, { useState } from 'react';
import ListUser from './component/listUser';
import Profile from './component/Profile';
import ListProduct from './component/ListProduct';
import Counter from './component/Counter';
import RandomNumber from './component/RandomNumber';
import ChangeState from './component/ChangeState';
import DarkModeToggle from './component/DarkModeToggle';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <ListProduct/>
      <ListUser />
      <Profile />
      <Counter/>
      <RandomNumber/>
      <ChangeState/>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}