import React, { useEffect, useState } from "react";
import "./Main.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import Naruto from "../../Assets/posts/naruto.webp";
import Sehr from "../../Assets/posts/sehr.jpeg";
import Gintama from "../../Assets/posts/gintama.jpeg";
import Stone from "../../Assets/posts/stone.jpg";
import Bleach from "../../Assets/posts/bleach.jpg";
import Meliodas from "../../Assets/posts/meliodas.jpg";
import Mortal from "../../Assets/posts/mortal.jpg";
import Leveling from "../../Assets/posts/leveling.jpeg";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import News from "../News/News";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ImgSlider from "../img_slider/ImgSlider";
const Main = () => {
  const [images, setImages] = useState([
    `${Naruto}`,
    `${Sehr}`,
    `${Gintama}`,
    `${Stone}`,
    `${Bleach}`,
    `${Meliodas}`,
    `${Mortal}`,
    `${Leveling}`,
  ]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/posts?_limit=8").then((res) => {
      setPosts(res?.data);
    }).catch((err)=> {
      console.log(err);
    })
    for (let i = 0; i < 8; i++) {}
  }, []);
  const [btn, setBtn] = useState([
    { id: 1, title: "Hamma animelar" },
    { id: 2, title: "Ongoing" },
    { id: 3, title: "Yakunlangan animelar" },
    { id: 4, title: "Anime Filmlar" },
    { id: 5, title: "Anime Content" },
  ]);
  return (
    <div className="main-container">
      <Navbar />
      <ImgSlider/>
      <div className="main">
        <div className="categories">
          <div>
            {btn.map((item, index) => {
              return <button key={index} className="categories__btn">{item.title}</button>;
            })}
          </div>
          <div>
            <Link className="categories__btn">
              Hammasi <MdNavigateNext className="fs-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="posts__cards">
        {posts.map((item, index) => {
          return (
            <Link to={`/single_posts/${item.episode}`} className="posts__card" key={index}>
              <div className="posts__card-img">
                <img src={images[index]} alt={item.img} />
              </div>
              <div className="posts__card-top">
                <p className="posts__card-year">{item.year}</p>
                <p className="posts__card-episodes">{item.episodes}</p>
                <FaHeart className="posts__heart"/>
              </div>
              <div className="posts__card-footer">
                <h4 className="posts__card-title">{item.name}</h4>
                <div className="posts__card-bottom">
                  <div className="posts__views"><FaEye className="eye"/>{item.views}</div>
                  <p>Pullik</p>
                </div>
              </div>
            </Link>
          );
        })}
        </div>
        <button className="view__more">Ko'proq ko'rsatish</button>
      </div>
      <News/>
      <Footer/>
    </div>
  );
};

export default Main;
