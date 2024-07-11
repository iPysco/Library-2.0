import React from 'react';
import style from './Admin.module.css';

function AdminProfile() {
  return (
    <div className={style["admin"]}>
      <div className={style["gridContainer"]}>
        <div className={style["adminProfile"]}>
          <h1>Perfil do Administrador</h1>
          <p><strong>Total de livros no acervo:</strong> 5</p>
          <p><strong>Total de livros emprestados:</strong> 3</p>
        </div>
        <div className={style["reservations"]}>
          <h1>Histórico de Reservas</h1>
          <div className={style["bookGrid"]}>
            <div className={style["atraso"]}>
              <div className={style["bookDetails"]}>
                <p><strong>Livro:</strong> O Senhor dos Anéis</p>
                <p><strong>Emprestado por:</strong> João Silva</p>
                <p className={style["status"]}>LIVRO EM ATRASO!</p>
              </div>
            </div>
            <div className={style["quase"]}>
              <div className={style["bookDetails"]}>
                <p><strong>Livro:</strong> A Guerra dos Tronos</p>
                <p><strong>Emprestado por:</strong> Maria Oliveira</p>
                <p className={style["status"]}>QUASE EM ATRASO!</p>
              </div>
            </div>
            <div className={style["vence"]}>
              <div className={style["bookDetails"]}>
                <p><strong>Livro:</strong> O Hobbit</p>
                <p><strong>Emprestado por:</strong> Carlos Pereira</p>
                <p className={style["status"]}>VENCE 09/10/24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
