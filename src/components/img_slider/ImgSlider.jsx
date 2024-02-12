import React, { useState } from "react";
import "./ImgSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../Assets/slider1.jpg";
import Img2Child from "../../Assets/slider4.jpeg";
import Img3 from "../../Assets/slider3.jpg";
import Img1Child from "../../Assets/slider1-child.jpeg"
import Img2 from "../../Assets/slider2-parent.png"
import Img3Child from "../../Assets/slider3.3.jpg"
import Bleach from "../../Assets/bleach.jpg"
import BleachChild from "../../Assets/bleach-child.jpg"
import Sehr from "../../Assets/sehr.jpeg"
import SehrChild from "../../Assets/sehr-child.jpeg"
const ImgSlider = ({setSearchClick}) => {
  const images = [
    {
      img: `${Img1}`,
      category: "Ongoing  Hamma animelar",
      title: "Gintama [13+]",
      desc: `
    Feoadallar davridagi Yaponiyada yashash misoli mashaqqat demak… Oʻzga sayyoraliklar bosib olgan boʻlsa ayniqsa. Toʻgʻri, tatbiq etilgan yangi qonunlar meʼyordan chiqib ketgancha emas. Biroq qilich olib yurishga qoʻyilgan taqiq rosmana samuraylarni junbishga keltirmasdan qoʻymadi. Haqiqiy yapon ruhi unda mujassam etgan soʻnggi samuray boʻlmish Sakata Gintoki norozilar orasida hatto ajralib turardi.`,
      year: "2006",
      child: `${Img1Child}`
    },
    {
      img: `${Bleach}`,
      category: "Ongoing  Hamma animelar",
      title: "Bleach {TV-1} [15+]",
      desc: `
      Ichigo Kurosaki bolaligidan o'liklarning ruhlari va ruhlarini ko'rgan. Hozir u o'n besh yoshda, u zamonaviy Yaponiyada yashaydi va o'rta maktabda o'qiydi.
Bir kuni uning yotoqxonasida Rukiya kuchiki ismli qiz to'satdan e'lon qilinadi. U shinigami va Ichigo nafaqat uni ko'rishi, balki eshitilmagan masala bilan ham shug'ullanishi mumkinligidan hayratda. Boshlangan munosabatlarni aniqlash bo'shning paydo bo'lishi bilan to'xtatiladi, uning orqasida Rukiya paydo bo'ldi.`,
      year: "2004",
      child: `${BleachChild}`
    },
    {
      img: `${Img2}`,
      category: "Ongoing  Hamma animelar",
      title: "Solo Leveling [17+]",
      desc: `
    Feoadallar davridagi Yaponiyada yashash misoli mashaqqat demak… Oʻzga sayyoraliklar bosib olgan boʻlsa ayniqsa. Toʻgʻri, tatbiq etilgan yangi qonunlar meʼyordan chiqib ketgancha emas. Biroq qilich olib yurishga qoʻyilgan taqiq rosmana samuraylarni junbishga keltirmasdan qoʻymadi. Haqiqiy yapon ruhi unda mujassam etgan soʻnggi samuray boʻlmish Sakata Gintoki norozilar orasida hatto ajralib turardi.`,
      year: "2024",
      child: `${Img2Child}`
    },
    {
      img: `${Img3}`,
      category: "Ongoing  Hamma animelar",
      title: "Daygo: O't o'chiruvchi [13+]",
      desc: `O't o'chiruvchilar yengilmas alanga bilan kurashishdan tortib, umidsiz qutqaruv operatsiyalarigacha hayotni xavf ostiga qo'yib, boshqalarni himoya qiladi. Daigo, yuki va Xiong "Orange"elita qutqaruv guruhiga kirishni orzu qiladilar. Buning uchun ular shaxsiy qiyinchiliklarni engib o'tishlari, har qachongidan ham qattiqroq mashq qilishlari va olovdan tirik chiqish uchun bir-birlariga ishonishlari kerak. Falokat paytida mamlakatni qutqarish uchun kuchlarni birlashtira oladimi?`,
      year: "2023",
      child: `${Img3Child}`
    },
    {
      img: `${Sehr}`,
      category: "Ongoing  Hamma animelar",
      title: "Sehr va mushaklar {TV-2} [13+]",
      desc: `
      Sehrli dunyoda tugʻilish sehrgar boʻlib qolishni anglatmaydi. Bu dunyo ham oʻsha-oʻsha hayot tashvishlari-yu gʻalvalarga boy. Biroq bu yerda jamiyat shajarasidagi oʻrin-martaba iqtisodiy va aloqaviy boyliklar ustiga qurilmagan, balki kishining qanchalik kuchli sehr qudrat sohibi ekanligi birlamchi koʻrsatkichdir. Lekin, afsuslarki, Mesh Bornded bu jamiyatda oʻzini eng quyi oʻrinda topdi — unda na bir sehr kuch-qudrati bor edi. Tabiiyki, uni tezda isteʼdodsiz va yakkamoxovga chiqarishdi.`,
      year: "2024",
      child: `${SehrChild}`
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings} className="slider" >
      {images.map((image, index) => (
        <div key={index} className=" position-relative" onClick={()=>setSearchClick(false)}>
          <div className="slider__card">
            <div className="slider__text">
              <p className="slider__category">{image.category}</p>
              <h2 className="slider__title">{image.title}</h2>
              <p className="slider__desc">{image.desc}</p>
              <div className="slider__card-footer">
                <h5>{image.year}</h5>
                <div>
                  <p>1080</p>
                  <p>FULL HD</p>
                </div>
                <button><span className="play">▼</span> KO'RISH</button>
              </div>
            </div>
            <img className="slider__card-img" src={image.child} alt="slider" />
          </div>
          <img
            className="slider__img"
            src={image.img}
            alt={`slide ${index + 1}`}
            />
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
