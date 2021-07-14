import React from "react";
import { Container } from "./style";

export default function HomePage() {
  return (
    <Container>
      <div className="container--text">
        <h1 className="titulo--principal">
          Emagreça e conquiste uma vida ainda mais saudável com o{" "}
          <span>Método MagraSS</span>
        </h1>
        <span className="Image"></span>

        <p className="subtitulo">
          Nossa metodologia alia o melhor da estética corporal e facial em
          conjunto com a tecnologia, potencializando o processo de
          emagrecimento. Além de contar com uma equipe é multiprofissional.
        </p>

        <button className="botao">Conhecer o Método MagraSS</button>
      </div>
    </Container>
  );
}
