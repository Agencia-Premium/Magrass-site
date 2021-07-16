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
      <img className="logo--" src="./logoSobre.svg" />
      <nav className="navbar">
        <a href="#metodo-magras">Método Magrass</a>
        <a href="#sobre">Sobre nós</a>
        <a href="#presente">Presente MagraSS</a>
        <a href="#contato">Contato</a>
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
