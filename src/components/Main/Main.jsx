import React, { useEffect, useState } from "react";
import "./Main.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Main = ({ filterItem }) => {
  const [filtercategories, setFilterCategories] = useState("");
  const [posts, setPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);
  let result = []
  const [limit, setLimit] = useState(8)
  useEffect(() => {
    axios
    .get(`http://localhost:8000/posts?_limit=${limit}`)
    .then((res) => {
      for(let i in filtercategories){
        result.push(filtercategories[i].title);
      }
      setPosts(res?.data); 
    })
    .catch((err) => {
      console.log(err);
    });
    axios.get("http://localhost:8000/categories").then((res) => {
      setFilterCategories(res.data.filter((item)=> item.active === true));
    });
    
  }, []);
 
  const heartSave =(item)=> {   
      axios.put(`http://localhost:8000/posts/${item.id}`, { ...item, heart: !item.heart, }).then((res)=> {
      if (res?.status === 200) {
        axios.get("http://localhost:8000/posts").then((res)=> {
          setPosts(res?.data)
        })
      }
    })
  }
  const viewMore =()=> {
    setLimit(limit=> limit * 2)
    axios.get("http://localhost:8000/posts").then((res)=> {
          setPosts(res?.data)
        })
  }
  return (
    <div className="main-container">
      <div>
        <div className="posts">
          <div className="posts__cards">
            {posts.map((item, index) => {
              return (
                <div className="posts__card" key={index}>
                  <Link
                    to={`/single_posts/${item.episode}`}
                    className="posts__single-page"
                  ></Link>
                  <div className="posts__card-img">
                    <img src={item.image} alt={item.img} />
                  </div>
                  <div className="posts__card-top">
                    <p className="posts__card-year">{item.year}</p>
                    <p className="posts__card-episodes">{item.episodes}</p>
                    <div className="posts__heart" onClick={()=>heartSave(item)}>
                      <FaHeart className={`posts__fav ${item.heart ? "posts__saved" : "posts__removed"}`} />
                    </div>
                  </div>
                  <div className="posts__card-footer">
                    <h4 className="posts__card-title">{item.name}</h4>
                    <div className="posts__card-bottom">
                      <div className="posts__views">
                        <FaEye className="eye" />
                        {item.views}
                      </div>
                      <p>Pullik</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="view__more" onClick={viewMore}>Ko'proq ko'rsatish</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
