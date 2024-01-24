import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ImgSlider from './components/img_slider/ImgSlider';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='header' element={<Header/>}/>
        <Route path='' element={<Main />}/>
      </Routes>
    </div>
  )
}

export default App
