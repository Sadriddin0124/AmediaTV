import React, { useState } from 'react'
import Main from '../Main/Main'
import ImgSlider from '../img_slider/ImgSlider'
import Navbar from '../Navbar/Navbar'
import News from "../News/News";
import Footer from "../Footer/Footer";
import CategoryBTN from '../Categorybtn/CategoryBTN';
const Container = () => {
  const [searchClick, setSearchClick] = useState(false);

  return (
    <div>
      <Navbar searchClick={searchClick} setSearchClick={setSearchClick}/>
      <ImgSlider setSearchClick={setSearchClick}/>
      <CategoryBTN/>
      <Main/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Container
