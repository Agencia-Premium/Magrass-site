import React from "react";
import { Container } from "./styles";

export default function Sobre() {
  return (
    <Container>
      <div className="containerSobre">
        <h2 className="text--titulo">Sobre Nós</h2>
        <img
          className="logoSobre"
          src="./logoSobre.svg"
          alt="Logo em azul escrito magrass"
        />
        <span className="Moças--magrass" />
        <p className="TextSobre">
          {" "}
          Somos uma clínica especializada em soluções de emagrecimento e
          tratamentos estéticos com foco em Emagrecimento, Celulite, Gordura
          Localizada, Estrias e Flacidez. Através de um programa próprio de
          cuidados, somos muito mais que uma clínica de estética e
          emagrecimento: oferecemos benefícios exclusivos que ajudam a emagrecer
          com saúde, desde a primeira semana.
        </p>
      </div>
    </Container>
  );
}
