import React from "react";
import CardGif from "../../Components/CardGif";
import { Container, ContainerCardGif } from "./styles";

export default function Presente() {
  return (
    <Container id="presente">
      <div className="Container--Text">
        <h2 className="text--Title">Presente MagraSS</h2>
        <p className="text--Description">
          Sabemos que você procura uma vida com melhores hábitos e com a{" "}
          <span>Magrass</span> esse objetivo será alcançado com sucesso. Mas
          para você não deixar para começar depois, preparamos dois presentes
          especiais para você começar hoje mesmo sua transformação pessoal.
        </p>
        <ContainerCardGif>
          <CardGif
            image="./iconEbook.svg"
            alt="Icone ebook"
            title="Primeiro presente - E-book Ansiedade e Fome"
            image2="./Aspas.svg"
            description="Você sabia que para iniciar uma mudança de estilo de vida é importante entender a sua relação com a alimentação? Quais os fatores envolvidos em seus hábitos alimentares e a forma que você enxerga a comida.﻿
            Você é uma pessoa que come para compensar uma situação?"
            description2="Quando está triste ou quando está muito feliz, para se recompensar? E quando está ansioso, fica com mais fome?
            Entenda melhor como você pode melhorar a sua relação com a comida, e dessa forma, quando iniciar o tratamento poderemos conversar melhor com você sobre o assunto e te dar mais dicas!  "
          />
          <CardGif
            image="./iconConsulta.svg"
            alt="Icone ebook"
            title="Segundo presente - Consulta na clínica"
            image2="./Aspas.svg"
            description="Queremos te conhecer e te ajudar a dar o primeiro passo nessa mudança. Por isso, a sua primeira consulta é por nossa conta."
            description2="Após o seu cadastro, entraremos em contato para agendar uma consulta bônus na unidade Magrass que você selecionar abaixo. Nesse encontro vamos conversar melhor e criar um plano Magrass ideal para você. Vamos te apresentar a clínica e todos os benefícios que você terá acesso!"
          />
        </ContainerCardGif>
      </div>
    </Container>
  );
}
