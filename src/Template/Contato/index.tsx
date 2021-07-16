import { Container, CardContainer } from "./styles";
import Form from "../../Components/Form";
import Location from "../../Components/Location";

export default function Contato() {
  return (
    <>
      <Container id="contato">
        <div className="description">
          <h1>Entre em contato com a gente!</h1>
          <p>
            Entre em contato com a <span> Magrass </span>, via formulario ou
            Whatsapp queremos tirar suas dúvidas, ouvir suas críticas e
            sugestões.
          </p>
        </div>

        <div className="content">
          <div className="formulario">
            <Form />
          </div>

          <CardContainer>
            <div className="title">
              <h2>Lojas Magrass</h2>
            </div>

            <div className="cards">
              <Location
                unity="Ji-Paraná"
                fone="(69) 3421-2331"
                address="Av. Clóvis Arraes, 1323 - Bairro Centro, Ji-Paraná - RO, 76900-044"
                email="jiparana@magrass.online"
                linkMaps="https://goo.gl/maps/mgs2Z643YwSEzj3z5"
              />

              <Location
                unity="Vilhena"
                fone="(69) 3321-6006"
                address="Av. Maj. Amarante, 4786 - Centro, Vilhena - RO, 76980-000"
                email="vilhena@magrass.online"
                linkMaps="https://goo.gl/maps/bB31nSur7f6xY2Vv6"
              />

              <Location
                unity="Cacoal"
                fone="(69) 3441-6531"
                address="R. Rui Barbosa, 1240 - Centro, Cacoal - RO, 76963-882"
                email="cacoal@magrass.online "
                linkMaps="https://goo.gl/maps/tp5UvSd8qn6X9Qu59"
              />
            </div>
          </CardContainer>
        </div>
      </Container>
    </>
  );
}
