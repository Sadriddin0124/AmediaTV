import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import SinglePosts from './pages/SinglePosts/SinglePosts';
import Container from './components/Container/Container';
import AllAnimes from './pages/AllAnimes/AllAnimes';
import Profile from './pages/Profile/Profile';
const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='all' element={<AllAnimes/>}></Route>
        <Route path='/' element={<Container/>}></Route>
        <Route path='navbar' element={<Navbar/>}/>
        <Route path='single_posts/:id' element={<SinglePosts/>}></Route>
        <Route path='main' element={<Main />}/>
        <Route path='profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  )
}

export default App
