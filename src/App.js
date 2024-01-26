import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ImgSlider from './components/img_slider/ImgSlider';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import SinglePosts from './pages/SinglePosts/SinglePosts';
const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='navbar' element={<Navbar/>}/>
        <Route path='single_posts/:id' element={<SinglePosts/>}></Route>
        <Route path='' element={<Main />}/>
      </Routes>
    </div>
  )
}

export default App
