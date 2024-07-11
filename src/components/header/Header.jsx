import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style["header"]}>
      <h1>Biblioteca</h1>
      <nav className={style["navbar"]}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/perfil">Perfil</a>
          </li>
          <li>
            <a href="/admin">ADM</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
