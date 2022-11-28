import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./HomeForm.scss";

export const HomeForm = () => {
  return (
    <section className="b-form__container">
      <form className="b-home-form">
        <SearchBar></SearchBar>
        <div className="b-buttons__container">
          <div className="b-son__container">
            <button className="b-button__deposit">
              <img
                className="b-button__icon"
                src="./Assets/Images/calendar-deposit-icon-form.png"
                alt=""
              ></img>{" "}
              Depósito
            </button>
            <button className="b-button__pieces">
              {" "}
              <img
                className="b-button__icon"
                src="./Assets/Images/bag-icon-home.png"
                alt=""
              ></img>{" "}
              Nº de piezas
            </button>
          </div>
          <div className="b-son__container">
            <button className="b-button__leave">
              <img
                className="b-button__icon"
                src="./Assets/Images/calendar-icon-home.png"
                alt=""
              ></img>{" "}
              Retirada
            </button>
            <button className="b-button__tariffs">Tarifas</button>
          </div>
        </div>
      </form>
    </section>
  );
};
