import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThanksPage.scss";

export const ThanksPage = () => {
  const navigate = useNavigate()
  
  
  return (
    <>
      <div className="b-thanks__container">
        <h2>Reserva Completada</h2>
        <div className="b-image__contain">
          <img
            className="b-thanks__image"
            src="/Assets/Images/phoenix-thanks.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className="b-thanks__texts">
        <h3 className="b-second__title">BE FREE!</h3>
        <p className="b-undertitle__paragraph">
          Contacta ya con tu guardian y espera a que acepte tu reserva.
        </p>
      </div>
      <div className="thanks-back__cross">
        <button onClick={()=> navigate('/home')}>
          <img
            className="b-cross__image"
            src="/Assets/Images/cross-thanks-img.jpg"
            alt=""
          ></img>
        </button>
      </div>
    </>
  );
};