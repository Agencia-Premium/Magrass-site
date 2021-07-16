import { Container } from "./styles";
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <Container>
      <div className="text">
        <img src="./logoMagrassFooter.svg" alt="Logo Magrass in footer" />
        <p>© 2021 Magrass.</p>
        <p>Todos os direitos reservados.</p>
        <br />
        <p>
          Desenvolvido por
          <a href="https://www.agenciapremium.com.br/" target="_blank">
            Agência Premium
          </a>
        </p>
      </div>

      <div className="icons">
        <a href="https://www.instagram.com/magrassjiparana" target="_blank">
          <FaInstagram color="#FFF" size={32} />
        </a>

        <a href="https://www.facebook.com/magrassjiparana/" target="_blank">
          <FaFacebookSquare color="#FFF" size={32} />
        </a>

        <a
          href="https://www.youtube.com/channel/UCyxfbcxluwPR-bHWBvuLipQ"
          target="_blank"
        >
          <FaYoutube color="#FFF" size={32} />
        </a>
      </div>
    </Container>
  );
}
