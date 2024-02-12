import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import "./AuthModal.scss";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';

const AuthModal = ({ open, toggle }) => {
  const [type, setType] = useState(false);
  const [formId, setFormId] = useState(1);
  const [hover, setHover] = useState(false);
  const [puzzle, setPuzzle] = useState("")
  const [number, setNumber] = useState("")
  const [input, setInput] = useState('')
  const [code, setCode] = useState("")
  const closeModal = () => {
    toggle();
    setFormId(1);
    setInput(false)
    let random = uuidv4().slice(0,5)
    setPuzzle(random)
  };
  const handleSignIn = (e) => {
    e.preventDefault()
    let random = uuidv4().slice(0,5)
    setPuzzle(random)
    setFormId(4)
    setNumber(e.target[0].value)
    axios.get("http://localhost:8000/numbers").then((res)=>{
      res.data.map(item=> {
        if(item.number == e.target[0].value){
          setInput(true)
          axios.post("http://localhost:8000/numbers", {number: e.target[0].value})
        }
        // else{
        //   axios.post("http://localhost:8000/numbers", {number: e.target[0].value})
        // }
      })
    })
  };
  const handleSignInResume =(e)=> {
    e.preventDefault()
    let min = 1000;
   let max = 9999;
   let rand =  min + parseInt((Math.random() * (max-min)))
    let check = e.target[1].value
    if (check === puzzle) {
      setFormId(5)
      setCode(rand)
      setTimeout(()=>{
        alert(rand)
      }, 1000)
    }else {
      alert("error")
    }
    let payload = {
      name: e.target[0].value,
      number: number
    }
    if (e.target[0].value) {
      axios.post("http://localhost:8000/register", payload)
    }
    console.log(check);
    console.log(payload);
    
  }
  const handleCode =(e)=> {
    e.preventDefault()
    if (e.target[0].value == code ) {
      axios.post("http://localhost:8000/profile", {status: true}).then(res=> {
        if(res.status === 201){
          window.location.reload()
        }
      })
    }
  }
  const handleRegister =(e)=> {
    e.preventDefault()
    let payload = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      confirm_password: e.target[3].value,
      status: "registered"
    }
    console.log(payload);
    axios.post("http://localhost:8000/register", payload).then(res=> {
      console.log(res);
    })
  }
  return (
    <div>
      <Modal isOpen={open} toggle={closeModal} className="w-[400px]">
        <ModalBody>
          <div className="flex flex-col items-center gap-[20px]">
            <div className="w-[80%] flex justify-between items-center mb-[20px]">
              <h1 className="text-[20px]">
                {formId === 1 || formId === 2 ? "Kirish" : "Ro'yxatdan o'tish"}
              </h1>
              <div
                className="relative w-[30px] h-[30px] cursor-pointer"
                onClick={toggle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div
                  className={`w-[15px] h-[2px] rotate-[45deg]  absolute top-[14px] left-[8px] rounded-md ${
                    hover ? "bg-[#f29824]" : "bg-black"
                  }`}
                ></div>
                <div
                  className={`w-[15px] h-[2px] rotate-[-45deg] absolute top-[14px] left-[8px] rounded-md ${
                    hover ? "bg-[#f29824]" : "bg-black"
                  }`}
                ></div>
              </div>
            </div>
            <form
              onSubmit={handleSignIn}
              className={`w-[80%] flex flex-col gap-[20px] ${
                formId === 1 ? "block" : "hidden"
              }`}
            >
              <input
                type="number"
                className="px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[0.8px] font-[600] border-[black] text-[16px] focus:border-[#f29824]"
              />
              <button type="submit" className="w-[100%] px-[15px] py-[8px] bg-[#f29824] rounded-md text-white">
                Kirish
              </button>
              <Link
                className="self-start no-underline text-black"
                onClick={() => setFormId(2)}
              >
                Email orqali kirish
              </Link>
            </form>
            <form
              onSubmit={handleSignInResume}
              className={`w-[80%] flex flex-col items-center gap-[20px] ${
                formId === 4 ? "block" : "hidden"
              }`}
            >
              <input
                type="text"
                placeholder="Ismingizni kiriting..."
                className={`px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[1px] font-[600] border-[#b9b9b9] text-[16px] focus:border-[#f29824] ${input ? "hidden" : "block"}`}
              />
              <div className="w-[200px] h-[50px] bg-gradient-to-r from-gray-500 to-white flex items-center justify-center line-through">
                <h1 className="vitamin">{puzzle}</h1>
              </div>
              <input
                type="text"
                placeholder="Rasmdagi kodni kiriting..."
                className="px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[1px] font-[600] border-[#b9b9b9] text-[16px] focus:border-[#f29824]"
              />
              <button type="submit" className="w-[100%] px-[15px] py-[8px] bg-[#f29824] rounded-md text-white">
                Davom etish
              </button>
            </form>
            <form
              onSubmit={handleCode}
              className={`w-[80%] flex flex-col items-center gap-[20px] ${
                formId === 5 ? "block" : "hidden"
              }`}
            >
              
              <input
                type="text"
                placeholder="Kodni kiriting..."
                className="px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[1px] font-[600] border-[#b9b9b9] text-[16px] focus:border-[#f29824]"
              />
              <button type="submit" className="w-[100%] px-[15px] py-[8px] bg-[#f29824] rounded-md text-white">
                Davom etish
              </button>
            </form>
          </div>
          <div
            className={`w-[100%] flex justify-center ${
              formId === 2 ? "block" : "hidden"
            }`}
          >
            <form
              onSubmit={handleSignIn}
              className="w-[80%] flex flex-col gap-[20px]"
            >
              <input
                placeholder="Emailni kiriting..."
                type="email"
                className="px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[0.8px] font-[600] border-[black] text-[16px] focus:border-[#f29824]"
              />
              <div className="relative">
                <input
                  placeholder="Parolni kiriting..."
                  type={type ? "text" : "password"}
                  className="px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[0.8px] font-[600] border-[black] text-[16px] focus:border-[#f29824]"
                />
                <FaEye
                  className={` text-slate-500 text-[20px] absolute top-[12px] right-[12px] cursor-pointer ${
                    type ? "hidden" : "block"
                  }`}
                  onClick={() => setType((prev) => !prev)}
                />
                <IoMdEyeOff
                  className={` text-slate-500 text-[20px] absolute top-[12px] right-[12px] cursor-pointer ${
                    type ? "block" : "hidden"
                  }`}
                  onClick={() => setType((prev) => !prev)}
                />
              </div>
              <button type="submit" className="w-[100%] px-[15px] py-[8px] bg-[#f29824] rounded-md text-white">
                Kirish
              </button>
              <Link
                className="self-start no-underline text-black"
                onClick={() => setFormId(3)}
              >
                Email orqali ro'yxatdan o'tish
              </Link>
            </form>
          </div>
          <div
            className={`w-[100%] flex justify-center ${
              formId === 3 ? "block" : "hidden"
            }`}
          >
            <form
              onSubmit={handleRegister}
              className="w-[80%] flex flex-col gap-[20px]"
            >
              <input
                placeholder="Ismingizni kiriting..."
                type="text"
                className="px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[0.8px] font-[600] border-[black] text-[16px] focus:border-[#f29824]"
              />
              <input
                placeholder="Emailni kiriting..."
                type="email"
                className="px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[0.8px] font-[600] border-[black] text-[16px] focus:border-[#f29824]"
              />
              <div className="relative">
                <input
                  placeholder="Parolni kiriting..."
                  type={type ? "text" : "password"}
                  className="px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[0.8px] font-[600] border-[black] text-[16px] focus:border-[#f29824]"
                />
                <FaEye
                  className={` text-slate-500 text-[20px] absolute top-[12px] right-[12px] cursor-pointer ${
                    type ? "hidden" : "block"
                  }`}
                  onClick={() => setType((prev) => !prev)}
                />
                <IoMdEyeOff
                  className={` text-slate-500 text-[20px] absolute top-[12px] right-[12px] cursor-pointer ${
                    type ? "block" : "hidden"
                  }`}
                  onClick={() => setType((prev) => !prev)}
                />
              </div>
              <div className="relative">
                <input
                  placeholder="Parolni tasdiqlang..."
                  type={type ? "text" : "password"}
                  className="px-[15px] py-[8px] outline-none rounded-md w-[100%] border-[0.8px] font-[600] border-[black] text-[16px] focus:border-[#f29824]"
                />
                <FaEye
                  className={` text-slate-500 text-[20px] absolute top-[12px] right-[12px] cursor-pointer ${
                    type ? "hidden" : "block"
                  }`}
                  onClick={() => setType((prev) => !prev)}
                />
                <IoMdEyeOff
                  className={` text-slate-500 text-[20px] absolute top-[12px] right-[12px] cursor-pointer ${
                    type ? "block" : "hidden"
                  }`}
                  onClick={() => setType((prev) => !prev)}
                />
              </div>
              <button type="submit" className="w-[100%] px-[15px] py-[8px] bg-[#f29824] rounded-md text-white">
                Ro'yxatdan o'tish
              </button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AuthModal;
