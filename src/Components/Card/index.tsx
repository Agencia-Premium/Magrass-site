import React from "react";
import { Container } from "./styles";

type CardType = {
  image: string;
  title: string;
  description: string;
};
export default function Card(props: CardType) {
  return (
    <Container>
      <div className="card">
        <img src={props.image} alt="Imagem ilustrativo" />
        <h3 className="title">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Container>
  );
}
