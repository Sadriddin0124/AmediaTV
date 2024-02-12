import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import axios from "axios";
import GenresModal from "../../Modals/GenresModal/GenresModal";
import AuthModal from "../../Modals/Auth/AuthModal";
import { GoTriangleDown } from "react-icons/go";
import profileimg from "../../Assets/profile.png";
import { FaUser } from "react-icons/fa";
import { IoPower } from "react-icons/io5";
const Navbar = ({ searchClick, setSearchClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [navbar_status, setNavbar_status] = useState(false);
  const [searchValue, setSearchValue] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchBar, setSearchBar] = useState(false);
  const [genresModal, setGenresModal] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [profileBar, setProfileBar] = useState(false);
  const [profile, setProfile] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8000/profile").then((res) => {
      setProfile(res.data[res.data.length - 1]);
    });
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100; // You can adjust the scroll threshold
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleSearch = (e) => {
    axios.get(`http://localhost:8000/posts`).then((res) => {
      console.log(res.data);
      console.log(e.target.value);
      setSearchValue(res?.data);
      let arr = [{ name: "" }];
      if (e.target.value) {
        setSearchBar(true);
      } else {
        setSearchBar(false);
      }
      let filter = e.target.value
        ? searchValue.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        : arr;
      setSearchResults(filter);
    });
    setSearchBar(true);
  };
  const searchToggle = () => {
    setSearchClick((prev) => !prev);
    setSearchBar(false);
  };
  const logOut = () => {
    axios
      .put(`http://localhost:8000/profile/${profile.id}`, {
        id: profile.id,
        status: false,
      })
      .then((res) => {
        if (res.status === 200) {
          axios.get("http://localhost:8000/profile").then((res) => {
            setProfile(res.data[res.data.length - 1]);
          });
        }
      });
  };
  return (
    <div className="header-container">
      <AuthModal open={authModal} toggle={() => setAuthModal(false)} />
      <GenresModal open={genresModal} toggle={() => setGenresModal(false)} />
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
            <Link
              className="nav__body-text"
              onClick={() => setGenresModal(true)}
            >
              Janrlar
            </Link>
            <Link className="nav__body-text">Yillar</Link>
          </div>
        </aside>
        <div className="navbar__items d-flex flex-nowrap">
          <div className="navbar__logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="navbar__list navbar__list-width flex-nowrap">
            <li>
              <Link
                className="navbar__link"
                onClick={() => setGenresModal(true)}
              >
                Janrlar
              </Link>
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
                onClick={searchToggle}
                className={`search__icon ${
                  searchClick ? "search__icon-2" : ""
                }`}
              />
              <div
                className={`search__bar ${
                  searchBar ? "search__bar-block" : ""
                }`}
              >
                {searchResults.map((item, index) => {
                  return (
                    <div className="search__value">
                      <img
                        className="search__img"
                        src={item.image}
                        alt={item.name}
                      />
                      <h4 className="search__title">{item.name}</h4>
                    </div>
                  );
                })}
              </div>
            </li>
            <li>
              <h5>
                <span>UZ</span>|<span>RU</span>
              </h5>
            </li>
            <li className={profile.status ? "hidden" : "block"}>
              <Link
                className="navbar__auth flex items-center"
                onClick={() => setAuthModal(true)}
              >
                <FaSignInAlt className="navbar__entr-icon mt-[1px] mr-[5px] text-[16px]" />
                <span className="navbar__entr">Kirish</span>
              </Link>
            </li>
            <li
              className={`flex items-center relative ${
                profile.status ? "block" : "hidden"
              }`}
              onClick={() => setProfileBar((prev) => !prev)}
            >
              <img
                src={profileimg}
                alt="profile"
                className="w-[45px] h-[45px] bg-white rounded-full p-[5px]"
              />
              <GoTriangleDown color="#f29824" />
              <div
                className={`absolute bg-[#252831] w-[180px] p-[5px] right-0 top-[54px] rounded-lg flex flex-col gap-[5px] transition-[.6s] ${
                  profileBar ? "block" : "hidden"
                }`}
              >
                <h1 className="mx-[10px] w-[90%] border-b-[1px] text-[13px] py-[5px] text-[#f29824]">
                  Sadriddin
                </h1>
                  <div className="flex mx-[10px] gap-[10px] w-[90%] hover:bg-[#fff5e8] p-[5px] hover:text-[#f29824] rounded-md">
                  <FaUser className="text-[14px] mt-[3px]" />
                <Link to="/profile" className=" no-underline text-[14px] text-[white] hover:text-[#f29824] w-[70%] h-[100%] mx-[2px]">Profile</Link>
                </div>
                <div
                  onClick={logOut}
                  className="flex text-[14px] mx-[10px] items-center pb-[5px] text-red-500 font-[500]"
                >
                  <IoPower className="font-[600]" />
                  <p className="text-[14px] m-0">Chiqish</p>
                </div>
              </div>
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
