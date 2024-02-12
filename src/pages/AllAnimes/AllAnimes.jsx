import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AllAnimes.scss";
import Main from "../../components/Main/Main";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
const AllAnimes = () => {
  const [categories, setCategories] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [filterItem, setFilterItem] = useState('')
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res?.data);
    });
    axios.get("http://localhost:8000/genres").then((res) => {
      setGenres(res?.data);
    });
    axios.get("http://localhost:8000/posts").then((res) => {
      setPosts(res?.data);
    });
    axios.get("http://localhost:8000/years").then((res) => {
      let sorted = res.data.reverse();
      setYears(sorted);
    });
  }, []);
  const changeCategory =(item)=> {
    let payload = {
      id: item.id,
      title: item.title,
      active: !item.active
    }
    setFilterItem(item)
    axios.put(`http://localhost:8000/categories/${item.id}`, { ...payload }).then((res)=> {
      if (res?.status === 200) {
        axios.get("http://localhost:8000/categories").then((res)=> {
          setCategories(res?.data)
        })
      }
    })
    // let payload2 = {
    //   id: item.id,
    //   name:item.name,
    //   country: item.country,
    //   heart: item.heart,
    //   year: item.year,
    //   episodes: item.episodes,
    //   views: item.views,
    //   img: item.img,
    //   studio: item.studio,
    //   director: item.director,
    //   genre: item.genre,
    //   category: item.category,
    //   episode: item.episode,
    //   image: item.image,
    //   desc: item.desc
    // }
    // axios.put(`http://localhost:8000/posts/${item.id}`, { ...payload }).then((res)=> {
    //   if (res?.status === 200) {
    //     axios.get("http://localhost:8000/categories").then((res)=> {
    //       setCategories(res?.data)
    //     })
    //   }
    // })
  }
  const changeGenre =(item)=> {
    let payload = {
      id: item.id,
      title: item.title,
      active: !item.active
    }
    
    axios.put(`http://localhost:8000/genres/${item.id}`, { ...payload }).then((res)=> {
      if (res?.status === 200) {
        axios.get("http://localhost:8000/genres").then((res)=> {
          setGenres(res?.data)
        })
      }
    })
  }
  const changeYear =(item)=> {
    let payload = {
      id: item.id,
      title: item.title,
      active: !item.active
    }
    
    axios.put(`http://localhost:8000/years/${item.id}`, { ...payload }).then((res)=> {
      if (res?.status === 200) {
        axios.get("http://localhost:8000/years").then((res)=> {
          setYears(res?.data.reverse())
        })
      }
    })
  }
  return (
    <div className="all__container">
      <div className="nav">
      <Navbar/>
      </div>
      <div className="all__top">
        <h1 className="all__top-title">Anime filmlar</h1>
      </div>
      <div className="w-100 d-flex justify-content-center">
      <div className="all">
        <div className="all__left">
          <div className="all__categories">
            <h1 className="all__title">Kategoriyalar</h1>
            {categories.map((item, index) => {
              return (
                <div key={index} className="categories">
                  <div className="checkbox__container" onClick={()=>changeCategory(item)}>
                    <div className={`checkbox__box ${item.active ? "checkbox__change" : ""}`}>
                      <div className={`chaeckbox__tick ${item.active ? "checked" : ""}`}></div>
                    </div>
                    <input
                      type="checkbox"
                      id={item.title}
                      className="category__check"
                    />
                  </div>
                  <label htmlFor={item.title} className="category__text">
                    {item.title}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="all__categories">
            <h1 className="all__title">Janrlar</h1>
            {genres.map((item, index) => {
              return (
                <div className="categories" key={index}>
                  <div className="checkbox__container" onClick={()=>changeGenre(item)}>
                    <div className={`checkbox__box ${item.active ? "checkbox__change" : ""}`}>
                      <div className={`chaeckbox__tick ${item.active ? "checked" : ""}`}></div>
                    </div>
                    <input
                      type="checkbox"
                      id={item.title}
                      className="category__check"
                    />
                  </div>
                  <label htmlFor={item.title} className="category__text">
                    {item.title}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="all__categories">
            <h1 className="all__title">Yillar</h1>
            {years.map((item, index) => {
              return (
                <div className="categories" key={index}>
                  <div className="checkbox__container" onClick={()=>changeYear(item)}>
                    <div className={`checkbox__box ${item.active ? "checkbox__change" : ""}`}>
                      <div className={`chaeckbox__tick ${item.active ? "checked" : ""}`}></div>
                    </div>
                    <input
                      type="checkbox"
                      id={item.title}
                      className="category__check"
                    />
                  </div>

                  <label htmlFor={item.title} className="category__text">
                    {item.title}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <Main filterItem={filterItem}/>
      </div>
      </div>
        <Footer/>
    </div>
  );
};

export default AllAnimes;
