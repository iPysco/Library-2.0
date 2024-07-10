import React from "react";
import style from "./Book.module.css";
import Livrod from "../../assets/Livrod.jpg";

const Livro = () => {
  return (
    <div className={style["container"]}>
      <img src={Livrod} alt="Hobbit" />
      <h2>O Hobbit</h2>
      <p>
        "O Hobbit", de J.R.R. Tolkien, narra a aventura de Bilbo Bolseiro, um
        hobbit que vive tranquilamente até ser recrutado pelo mago Gandalf e um
        grupo de anões. Eles partem para recuperar um tesouro guardado pelo
        dragão Smaug. Durante a jornada, Bilbo encontra criaturas mágicas e
        descobre um anel mágico que o torna invisível. A história é sobre
        coragem, crescimento pessoal e a descoberta de um herói inesperado.
      </p>
      <button>Reservar</button>
    </div>
  );
};

export default Livro;
