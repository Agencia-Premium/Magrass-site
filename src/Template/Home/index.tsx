import React from "react";
import { Container } from "./style";

export default function HomePage() {
  return (
    <Container>
      <div className="content">
        <div className="left">
          <h1 className="titulo--principal">
            Emagreça e conquiste uma vida ainda mais saudável com o
            <span>Método MagraSS</span>
          </h1>

          <p className="subtitulo">
            Nossa metodologia alia o melhor da estética corporal e facial em
            conjunto com a tecnologia, potencializando o processo de
            emagrecimento. Além de contar com uma equipe é multiprofissional.
          </p>

          <a href="#metodo-magras" className="botao">
            Conhecer o Método MagraSS
          </a>
        </div>

        <div className="right">
          <img src="./homebackground.png" alt="Foto home " />
        </div>
      </div>
    </Container>
  );
}
