import React from "react";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/170292?s=460&v=4"
          alt="Anderson Martiniano"
        />
        <div>
          <strong>Anderson Martiniano</strong>
          <span>Especialidade</span>
        </div>
      </header>

      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;