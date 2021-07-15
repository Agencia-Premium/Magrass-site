import React from "react";
import { CardContainer, Container } from "./styles";
import Card from "../../Components/Card";

export default function Metodo() {
  return (
    <Container>
      <div className="containerText">
        <h2 className="title--text">Método MagraSS</h2>

        <p className="subtitle">
          A 2 anos <span>Magrass</span>, tem a preocupação com o emagrecimento
          saudável e estética de resultado, veja alguns de nossos serviçõs.
        </p>
      </div>
      <CardContainer>
        <Card
          image="./iconScience.svg"
          title="Programa Baseado
          em Ciência "
          description="O método de emagrecimento Magrass é formado por extensos estudos e 
          está em constante evolução, assim como você."
        />

        <Card
          image="./iconMoca.svg"
          title="Modernos Tratamentos
          Estéticos "
          description="Estética corporal e estética facial aliados a tecnologia com o objetivo de potencializar e 
          melhorar o aspecto da pele durante o emagrecimento."
        />

        <Card
          image="./iconNurse.svg"
          title="Suporte e Companhamento
          Contínuo"
          description="Nossa equipe multiprofissional,   está sempre preparada 
          para tirar dúvidas, esclarecer procedimentos e dar dicas."
        />
        <Card
          image="./iconFat.svg"
          title="Linha Magrass de Alimentos
          Saudáveis"
          description="Alimentos que ajudam a emagrecer de forma saudável e nutritiva, auxiliando em todo o processo de perda de peso."
        />
        <Card
          image="./iconMult.svg"
          title="Corpo clinico multiprofissional"
          description=" A equipe é multiprofissional, formada por nutricionistas, biomédicas, esteticistas e fisioterapeuras dermatofunciais."
        />
        <Card
          image="./iconPhone.svg"
          title="App Magrass Club"
          description="Acesso ilimitado aos recursos do aplicativo Magrass Club, além de receber lembretes e dicas personalizadas da sua nutri, para atingir seus objetivos mais rápido."
        />
      </CardContainer>
    </Container>
  );
}
