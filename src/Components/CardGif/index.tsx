import React from "react";
import { Container } from "./styled";

type GifType = {
  image?: string;
  image2?: string;
  title?: string;
  description?: string;
  description2?: string;
  alt?: string;
};
export default function CardGif(props: GifType) {
  return (
    <Container>
      <div className="Container--text">
        <img className="image" src={props.image} alt={props.alt} />
        <h3 className="titulo">{props.title}</h3>

        <p className="descricao --tipo">
          <img className="aspa" src={props.image2} />
          {props.description}
        </p>
        <p className="descricao --text2">{props.description2}</p>
      </div>
    </Container>
  );
}
