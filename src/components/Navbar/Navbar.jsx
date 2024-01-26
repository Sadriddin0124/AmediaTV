import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";
import ImgSlider from "../img_slider/ImgSlider";
import axios from "axios";
import Naruto from "../../Assets/posts/naruto.webp";
import Sehr from "../../Assets/posts/sehr.jpeg";
import Gintama from "../../Assets/posts/gintama.jpeg";
import Stone from "../../Assets/posts/stone.jpg";
import Bleach from "../../Assets/posts/bleach.jpg";
import Meliodas from "../../Assets/posts/meliodas.jpg";
import Mortal from "../../Assets/posts/mortal.jpg";
import Leveling from "../../Assets/posts/leveling.jpeg";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navbar_status, setNavbar_status] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [searchValue, setSearchValue] = useState([]) 
  const [searchResults, setSearchResults] = useState([])
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
  const [searchBar, setSearchBar] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100; // You can adjust the scroll threshold
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleSearch =(e)=> {
    axios.get(`http://localhost:8000/posts`).then((res)=> {
      console.log(res.data);
      console.log(e.target.value);
      setSearchValue(res?.data)
      let arr =[
        {name: ""}
      ]
      if (e.target.value) {
        setSearchBar(true)
      }else {
        setSearchBar(false)
      }
      let filter = e.target.value ? searchValue.filter((item)=> item.name.toLowerCase().includes(e.target.value.toLowerCase())) : arr
      setSearchResults(filter)
      console.log(arr);
      console.log(filter);
    })
    setSearchBar(true)
  }
  return (
    <div className="header-container">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <aside
          className={`responsive__navbar ${navbar_status ? "bar__left" : ""}`}
        >
          <div className="responsive__navbar-top">
            <h1>Menu</h1>
            <div
              className="responsive__exit"
              onClick={() => setNavbar_status((prev) => !prev)}
            >
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="responsive__navbar-body">
            <Link className="nav__body-text">Janrlar</Link>
            <Link className="nav__body-text">Yillar</Link>
          </div>
        </aside>
        <div className="navbar__items d-flex">
          <div className="navbar__logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="navbar__list navbar__list-width">
            <li>
              <Link className="navbar__link">Janrlar</Link>
            </li>
            <li>
              <Link className="navbar__link">Yillar</Link>
            </li>
            <li className={`search-cont ${searchClick ? "search" : ""}`}>
              <input
                type="text"
                placeholder="Izlash..."
                className={`navbar__search ${
                  searchClick ? "change__navbar__search" : ""
                } `}
                onChange={handleSearch}
              />
              <FaSearch
                onClick={() => setSearchClick((prev) => !prev)}
                className={`search__icon ${searchClick ? "search__icon-2" : ""}`}
              />
              <div className={`search__bar ${searchBar ? "search__bar-block" : ""}`}>
                {
                  searchResults.map((item, index)=> {
                    return <div className="search__value">
                      <img className="search__img" src={images[index]} alt={item.name} />
                      <h4 className="search__title">{item.name}</h4>
                    </div>
                  })
                }
              </div>
            </li>
            <li>
              <h5>
                <span>UZ</span>|<span>RU</span>
              </h5>
            </li>
            <li>
              <Link className="navbar__auth">
                <IoEnterOutline className="navbar__entr-icon" />
                <span className="navbar__entr">Kirish</span>
              </Link>
            </li>
            <li
              className="bar"
              onClick={() => setNavbar_status((prev) => !prev)}
            >
              <div></div>
              <div></div>
              <div></div>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
