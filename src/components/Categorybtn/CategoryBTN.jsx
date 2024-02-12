import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import "../Main/Main.scss";

const CategoryBTN = () => {
    const [btn, setBtn] = useState([
        { id: 1, title: "Hamma animelar" },
        { id: 2, title: "Ongoing" },
        { id: 3, title: "Yakunlangan animelar" },
        { id: 4, title: "Anime Filmlar" },
        { id: 5, title: "Anime Content" },
      ])
    const [id, setId] = useState(1)
    useEffect(()=> {
      let id = +localStorage.getItem("category_id")
      setId(id)
    },[])
    const categoryActive =(id)=> {
      setId(id)
      localStorage.setItem("category_id", id)
    }
  return (
    <div className='w-100'>
      <div className="main">
        <div className="categories__btns">
          <div>
            {btn.map((item, index) => {
              return <button onClick={()=>categoryActive(item.id)} key={index} className={`categories__btn ${id === item.id ? "active" : ""}`}>{item.title}</button>;
            })}
          </div>
          <div>
            <Link to='/all' className="categories__btn flex flex-nowrap">
              Hammasi <MdNavigateNext className="fs-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryBTN
