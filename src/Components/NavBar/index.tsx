/* eslint-disable */
import React from "react";
import { Container } from "./styles";

export default function Form() {
  return (
    <Container>
      <img className="logo--" src="./logoMagrass.svg" />
      <nav className="navbar">
        <a href="/">Método Magrass</a>
        <a href="/">Sobre nós</a>
        <a href="/">Depoimentos</a>
        <a href="/">Contato</a>
        <a className="icon--social" href="/">
          <img src="/"></img>
        </a>
        <a className="icon--" href="">
          <img src="/"></img>
        </a>
      </nav>
    </Container>
  );
}
