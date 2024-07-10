import React from "react";
import style from "./Perfil.module.css";
import Livro from "../../assets/Livro.jpg";
import Livroc from "../../assets/Livroc.jpg";
import Livrot from "../../assets/Livrot.jpg";

const Perfil = () => {
  return (
    <div>
      <div className={style["container"]}>
        <h1>Historico de Reservas</h1>
        <ul>
          <li id={style["atraso"]}>
          <img src={Livro} alt="Livro Harry Potter Prisioneiro" />
            <p>LIVRO EM ATRASO!</p>
            <button>Devolver</button>
          </li>
          <li id={style["quase"]}>
            <img src={Livroc} alt="Harry Potter Pedra" />
            <p>QUASE EM ATRASO!</p>
           
            <button>Devolver</button>
          </li>
          <li id={style["vence"]}>
            <img src={Livrot} alt="Amigo Inmaginario" />
            <p>VENCE 09/10/24</p>
            <button>Devolver</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Perfil;
