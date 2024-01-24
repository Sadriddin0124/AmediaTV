import React from "react";
import "./News.scss";
const News = () => {
  return (
    <div className="news">
      <div className="news__item">
        <div className="news__item-top">
          <h1 className="news__title">Yangilik</h1>
        </div>
        <div className="news__body">
          <div className="news__text">
            <p className="news__category">Hamma animelar</p>
            <h3 className="news__text-title">
              2023 - yil kuz faslida chiqadigan animelar haqida umumiy
              ma'lumot(H.U.M)
            </h3>
            <p className="news__desc">
              ushbu videoda ko‘rsatilgan barcha animelarni Aniblauz ilovalarida
              tomosha qilishingiz mumkin !
            </p>
          </div>
          <div className="news__video">
            <iframe
              src="https://www.youtube.com/embed/jWdOryn3Sjg?si=srxzX8ScNYI-5yuh"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
