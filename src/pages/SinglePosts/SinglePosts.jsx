import React, { useEffect, useState } from "react";
import "./SinglePosts.scss";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import TheBot from "../../Assets/creators/thebot.jpg"
import Pixel from "../../Assets/creators/pixel.jpg"
import Kitsune from "../../Assets/creators/kitsune.jpg"
import Lego from "../../Assets/creators/lego.jpg"
import Meloman from "../../Assets/creators/meloman.jpg"
import Spectra from "../../Assets/creators/spectra.jpg"
import Tobi from "../../Assets/creators/tobi.jpg"
import Sehr from "../../Assets/sehr.jpeg"
import Naruto from "../../Assets/posts/naruto.webp"
const SinglePosts = () => {
  const [creators, setCreators] = useState([
    {img: `${TheBot}`, name: "Aziz Akhmadaliyev [•The Bot•]"},
    {img: `${Pixel}`, name: "Sardor Akhmedov [•Pixel Janoblari•]"},
    {img: `${Kitsune}`, name: "Kamilla Abilova (•Kitsune•)"},
    {img: `${Lego}`, name: "Umar Ismoilov (•Lego•)"},
    {img: `${Tobi}`, name: "Mahmudjon Dedaxonov (•Tobi•)"},
    {img: `${Spectra}`, name: "Jahongir Shukurov [•SpeCtra•]"},
    {img: `${Meloman}`, name: "Nodir Tukhtaboev (•Meloman•)"},
  ])
  const [frames, setFrames] = useState([
    {title: "Naruto", img: `${Naruto}`},
    {title: "Sehr", img: `${Sehr}`},
  ])
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  const [singlePost, setSinglePost] = useState([]);
  const [episodes, setEpisodes] = useState([])
  const url = +window.location.href.split("/")[4];
  useEffect(() => {
    axios.get("http://localhost:8000/posts").then((res) => {
      setSinglePost(res?.data);
    });
    for(let i = 1; i <= url; i++) {
      episodes.push(i)
      setEpisodes([...episodes])
    }
    let sorted = episodes.sort((a, b)=> b-a)
    let set = new Set(sorted)
    setEpisodes([...set])
  }, []);
  const changeActive1 = ()=> {
    setActive1(true)
    setActive2(false)
    setActive3(false)
  }
  const changeActive2 = ()=> {
    setActive1(false)
    setActive2(true)
    setActive3(false)
  }
  const changeActive3 = ()=> {
    setActive1(false)
    setActive2(false)
    setActive3(true)
  }
  return (
    <div>
      <Navbar />
      <div className="singlepost">
        {singlePost
          .filter((item) => item.episode === url)
          .map((item, index) => {
            return (
              <div className="single__container" key={index} >
                <h1 className="single__title">{item.name}</h1>
                <div className="single__top" key={index}>
                  <div className="single__text">
                    <h2 className="single__text-title" >Ma'lumotlar</h2>
                    <h4 className="single__country">
                      Mamlakat <span>{item.country}</span>
                    </h4>
                    <h4 className="single__director">
                      Rejissyor <span>{item.director}</span>
                    </h4>
                    <h4 className="single__studio">
                      Studiya <span>{item.studio}</span>
                    </h4>
                    <h4 className="single__genre">
                      Janr <span className="orange">{item.genre}</span>
                    </h4>
                    <h4 className="single__category">
                      Kategoriya <span className="orange">{item.category}</span>
                    </h4>
                    <h4 className="single__year">Yil <span>{item.year}</span></h4>
                  </div>
                  <div className="single__video">
                    <div className="single__video-layer">
                      <h5 className="text-light">Ushbu videoni ko'rish uchun ro'yxatdan o'ting !</h5>
                      <button className="single__video-btn btn-width">Kirish</button>
                    </div>
                    <button className="single__video-btn"><FaDownload className="download"/>Yuklab olish</button>
                  </div>
                  <div className="single__episodes">
                      {
                        episodes.map((item)=> {
                          return <button className="episodes__btn">{item}-qism</button>
                        })
                      }
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="single__desc">
          <div className="single__desc-text">
            {
              singlePost.filter((item)=> item.episode === url).map((item)=> <p>{item.desc}</p>)
            }
          </div>
      </div>
      <div className="single__comments">
        <div className="single__comments-top">
          <div className="single__comments-container">
            <button className={`single__comments-btn ${active1 ? "active__btn" : ""}`} onClick={changeActive1}>Izohlar</button>
            <button className={`single__comments-btn ${active2 ? "active__btn" : ""}`} onClick={changeActive2}>Ijodkorlar</button>
            <button className={`single__comments-btn ${active3 ? "active__btn" : ""}`} onClick={changeActive3}>Kadrlar</button>
          </div>
        </div>
        <div className="single__comments-body">
          <div className={`comments__container ${active1 ? "block" : ""}`}>
            <div className="comments__card">
            <h4 className="comments__card-title">Diqqat !!! Izohinghiz saytda joylashishi uchun iltimos fikringizni so'kinishsiz anime haqida to'liq bayon eting. Aks holda saytga yuklanmaydi</h4>
            <textarea rows="6" className="comments__dashboard" placeholder='Izoh...'></textarea>
            <button className="comments__btn">Jo'natish</button>
            </div>
          </div>
          <div className={`creator ${active2 ? "block" : ""}`}>
            {
              creators.map((item,index)=> {
                return <div key={index} className="creator__card">
                <img className="creator__img" src={item.img} alt={item.name} />
                <h5 className="creator__name">{item.name}</h5>
              </div>
              })
            }
          </div>
          <div className={`frames ${active3 ? "block" : ""}`}>
            {
              frames.map((item,index)=> {
                return <div className="frames__img" key={index}>
                  <img src={item.img} alt={item.name} />
                </div>
              })
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SinglePosts;
