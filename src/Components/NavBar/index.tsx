/* eslint-disable */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MenuMobile } from "../MenuMobile";
import { Container, MobileIcon } from "./styles";

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <MenuMobile isOpen={isOpen} toggle={toggle} />
      <img className="logo--" src="./logoMagrass.svg" />
      <nav className="navbar">
        <a href="/">Método Magrass</a>
        <a href="/">Sobre nós</a>
        <a href="/">Depoimentos</a>
        <a href="/">Contato</a>
        <a
          className="icon--instagram"
          href="https://www.instagram.com/magrassjiparana/?hl=pt-br"
        >
          <img src="/instagram.svg"></img>
        </a>
        <a
          className="icon--facebook"
          href="https://www.facebook.com/magrassjiparana/"
        >
          <img src="/facebook.svg"></img>
        </a>
      </nav>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
    </Container>
  );
}
