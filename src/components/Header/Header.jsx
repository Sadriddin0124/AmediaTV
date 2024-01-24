import React, { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";
import ImgSlider from "../img_slider/ImgSlider";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navbar_status, setNavbar_status] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100; // You can adjust the scroll threshold
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <div className="header-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <aside className={`responsive__navbar ${navbar_status ? "bar__left" : ""}`}>
          <div className="responsive__navbar-top">
            <h1>Menu</h1>
            <div className="responsive__exit" onClick={()=>setNavbar_status(prev => !prev)}>
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
          <ul className="navbar__list">
            <li>
              <Link className="navbar__link">Janrlar</Link>
            </li>
            <li>
              <Link className="navbar__link">Yillar</Link>
            </li>
            <li>
              <FaSearch />
            </li>
            <li>
              <h5>
                <span>UZ</span>|<span>RU</span>
              </h5>
            </li>
            <li>
              <Link className="navbar__auth"><IoEnterOutline className="navbar__entr-icon"/><span className="navbar__entr">Kirish</span></Link>
            </li>
            <li className="bar" onClick={()=>setNavbar_status(prev => !prev)}>
              <div></div>
              <div></div>
              <div></div>
            </li>
          </ul>
        </div>
      </nav>
      <header className="header">
        <ImgSlider />
      </header>
    </div>
  );
};

export default Header;
