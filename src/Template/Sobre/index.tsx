import React from "react";
import { Container } from "./styles";

export default function Sobre() {
  return (
    <Container id="sobre">
      <div className="containerSobre">
        <h2 className="text--titulo">Sobre Nós</h2>
        <img
          className="logoSobre"
          src="./logoSobre.svg"
          alt="Logo em azul escrito magrass"
        />
        <span className="Moças--magrass" />
        <div className="containerDirections">
          <div className="Left">
            <img src="./moca2.png" />
          </div>
          <div className="Right">
            <img
              className="logoMagrassPc"
              src="./logoSobre.svg"
              alt="Logo em azul escrito magrass"
            />
            <p className="TextSobre">
              {" "}
              Somos uma clínica especializada em soluções de emagrecimento e
              tratamentos estéticos com foco em Emagrecimento, Celulite, Gordura
              Localizada, Estrias e Flacidez. Através de um programa próprio de
              cuidados, somos muito mais que uma clínica de estética e
              emagrecimento: oferecemos benefícios exclusivos que ajudam a
              emagrecer com saúde, desde a primeira semana.
            </p>
            <div className="container--icons">
              <div className="fat --icons">
                <img src="./iconboneco.svg" />
                <p>2.600kg</p>
              </div>
              <div className="unidade --icons">
                <img src="./iconUnidade.svg" />
                <p>+280 </p>
                <p>Unidades no Brasil</p>
              </div>
              <div className="Multiprofissional --icons">
                <img src="./iconMult.svg" />
                <p>Multiprofissionais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
