import React, { useEffect, useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import "./GenresModal.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const GenresModal = ({ open, toggle }) => {
  const [modalGenres, setModalGenres] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/genres").then((res) => {
      setModalGenres(res?.data);
    });
  }, []);
  return (
    <div className="modal">
      <Modal isOpen={open} toggle={toggle} className="custom-modal" size="lg">
        <ModalBody>
          <div className="modal__container">
            <div className="modal__top" onClick={toggle}>
              <h1 className="modal__title">Janrlar</h1>
              <div className="toggle">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="modal__items">
              {modalGenres.map((item, index) => (
                <Link key={index} className="modal__link">{item.title}</Link>
              ))}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default GenresModal;
