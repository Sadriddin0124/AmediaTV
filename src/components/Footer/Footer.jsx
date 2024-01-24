import React from "react";
import "./Footer.scss";
import Payme from "../../Assets/footer/payme.png";
import Apelsin from "../../Assets/footer/apelsin.png";
import Oson from "../../Assets/footer/oson.png";
import Paynet from "../../Assets/footer/paynet.png";
import Click from "../../Assets/footer/click.png";
import Appstore from "../../Assets/footer/appstore.png";
import Play from "../../Assets/footer/play.svg";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer__top">
        <div className="footer__top-item">
          <h1 className="footer__title">Yangiliklar</h1>
          <button className="footer__btn">Barchasi</button>
        </div>
      </div>
      <footer className="footer">
        <h1 className="footer__bg-title">AMEDIATV</h1>
        <div className="footer__bottom">
          <div className="footer__items">
            <div className="footer__item">
              <h5 className="footer__item-title">Manzil</h5>
              <p className="footer__item-desc">
                O'zbekiston, Toshkent, Mirzo Ulug'bek tumani, Mahalla TTz-4, 40
                dom 26 honadon
              </p>
              <p className="footer__item-desc">
                Saytda chop etilgan har qanday materiallarga bo'lgan barcha
                huquqlar O'zbekiston va xalqaro mualliflik huquqi va turdosh
                huquqlar to'g'risidagi qonun hujjatlariga muvofiq himoyalangan.
                Matn, fotosurat, audio va video materiallardan har qanday
                foydalanish faqat mualliflik huquqi egasining roziligi bilan
                mumkin
              </p>
            </div>
            <div className="footer__item">
              <h5 className="footer__item-title">Kontaktlar</h5>
              <p className="footer__item-desc">+998 (88) 633 0124</p>
              <a href="https://amediatv.uz/cer" className="footer__item-text">
                Политика конфиденциалности
              </a>
              <a href="#" className="footer__item-text">
                Пользовательское соглашение
              </a>
            </div>
            <div className="footer__item">
              <h5 className="footer__item-title">Kategoriyalar</h5>
              <p className="footer__item-desc">Hamma animelar</p>
              <p className="footer__item-desc">Ongoing</p>
              <p className="footer__item-desc">Yakunlangan animelar</p>
              <p className="footer__item-desc">Anime Filmlar</p>
              <p className="footer__item-desc">Anime Content</p>
            </div>
            <div className="footer__item">
              <h5 className="footer__item-title">Ijtimoiy tarmoqlar</h5>
              <div className="footer__link">
                <a href="#" className="footer__social-media">
                  <FaTelegramPlane className="footer__social-icons" />
                </a>
                <a href="#" className="footer__social-media">
                  <IoLogoInstagram className="footer__social-icons" />
                </a>
                <a href="#" className="footer__social-media">
                  <FaYoutube className="footer__social-icons" />
                </a>
              </div>
              <h5 className="footer__item-title">Платежные системы</h5>
              <div className="footer__pay-types">
                <div className="footer__pay footer__payme">
                  <img src={Payme} alt="pay" />
                </div>
                <div className="footer__pay footer__click">
                  <img src={Click} alt="pay" />
                </div>
                <div className="footer__pay footer__oson">
                  <img src={Oson} alt="pay" />
                </div>
                <div className="footer__pay footer__apelsin">
                  <img src={Apelsin} alt="pay" />
                </div>
                <div className="footer__pay footer__paynet">
                  <img src={Paynet} alt="pay" />
                </div>
              </div>
              <div className="footer__store">
                <img src={Appstore} alt="appstore" className="appstore" />
                <img src={Play} alt="playmarket" className="playmarket" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__line">
            <div className="d-flex gap-3 align-content-center">
            <p className="footer__item-desc">Barcha huquqlar himoyalangan</p>
            <p className="footer__item-title">Наши лицензии</p>
            </div>
            <p className="footer__item-desc">UMD Soft</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
