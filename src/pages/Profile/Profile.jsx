import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import ProfileIMage from "../../Assets/bleach.jpg";
import "./Profile.scss";
import { FaEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import Footer from "../../components/Footer/Footer"
import Main from "../../components/Main/Main";
const Profile = () => {
  const [profileUser, setProfileUser] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8000/register").then((res) => {
      setProfileUser(res.data[res.data.length - 1]);
    });
  }, []);
  const [limit, setLimit] = useState([
    {id: 1, duration: "1 oylik", price: "12000 so'm", btn: "Obuna"},
    {id: 2, duration: "3 oylik", price: "12000 so'm", btn: "Obuna"},
    {id: 3, duration: "6 oylik", price: "12000 so'm", btn: "Obuna"},
    {id: 4, duration: "1 yillik", price: "12000 so'm", btn: "Obuna"},
  ])
  const [activeLimit, setActiveLimit] = useState([
    {id: 1, text: "Ta'riflar"},
    {id: 2, text: "Tanlanganlar"},
  ])
  const [limitId, setLimitId] = useState(1)
  useEffect(()=> {
    let id = +localStorage.getItem("limit_id")
    setLimitId(id)
  })
  const changeActive =(id)=> {
    setLimitId(id)
    localStorage.setItem("limit_id", id)
  }
  return (
    <div className=" bg-slate-100">
      <div className="h-[80px] bg-[#252831]"></div>
      <Navbar />
      <div className="w-[100%] min-h-[110vh] px-[20px] mt-[40px] flex flex-col items-center">
        <div className="bg-white max-w-[1230px] w-[100%] min-h-[100px] p-[20px] rounded-md flex justify-between">
          <div className="profile__top">
            <div className="w-[135px] h-[135px] relative">
              <img
                src={ProfileIMage}
                alt="profile"
                className="w-[135px] h-[135px] object-cover rounded-md"
              />
              <MdEdit className="absolute text-[30px] p-[3px] border-[1px] border-[#f29824] rounded-full text-[#f29824] hover:bg-[#f29824] hover:text-[#fff] cursor-pointer bottom-[5px] right-[5px] bg-[#fff]"/>
            </div>
            <div className="profile__details">
              <h1 className="m-0 text-[19px] font-[500] flex items-end gap-[10px]">{profileUser.name} <FaEdit className="hover:text-[#f29824] cursor-pointer"/></h1>
              <h2 className="m-0 text-[16px]">ID <span className="text-[#666666] font-[400]"> : {profileUser.id}</span></h2>
              <h2 className="m-0 text-[16px]">Balans<span className="text-[#666666] font-[400]"> : {profileUser.balans} so'm</span></h2>
              <button className="text-[14px] px-[15px] py-[8px] border-[1px] border-[#f29824] rounded-md text-[#f29824] font-[500] mt-[10px] ">Balansni to'ldirish</button>
            </div>
          </div>
          <div>
            <button className="profile__logout">Chiqish <FaSignOutAlt className="text-[#f29824] profile__logout-icon"/></button>
          </div>
        </div>
      <div className="profile__middle">
        <div className="profile__middle-nav">
            {
                activeLimit.map((item,index)=> <p onClick={()=>changeActive(item.id)} key={index} className={limitId === item.id ? "text-[#f29824]" : ""}>{item.text}</p>)
            }
        </div>
        <div className={`profile__limit ${limitId === 1 ? "block" : "hidden"}`}>
            <div className="profile__limit-cards">
                {
                    limit.map((item,index)=> {
                        return<div className="profile__limit-card" key={index}>
                            <p>{item.duration}</p>
                            <div className="profile__card-footer">
                                <h1>{item.price}</h1>
                                <button className="hover:bg-[#f29824] hover:text-[#fff] text-[14px] px-[15px] py-[8px] border-[1px] border-[#f29824] rounded-md text-[#f29824] font-[500] mt-[10px] ">{item.btn}</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className={`profile__selected ${limitId === 2 ? "block" : "hidden"}`}>
            <Main/>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
