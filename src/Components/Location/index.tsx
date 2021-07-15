import { Container } from "./styles";

type LocationProps = {
  unity: string;
  fone: string;
  address: string;
  linkMaps: string;
  email: string;
};

export default function Location(props: LocationProps) {
  return (
    <Container>
      <div className="card">
        <h3>{props.unity}</h3>
        <a className="fone" target="_blank">
          <img src="./phone.svg" alt="Icon Fone" />
          <span>{props.fone}</span>
        </a>

        <a className="address" href={props.linkMaps} target="_blank">
          <img src="./address.svg" alt="Icon Anddress" />
          <span>{props.address}</span>
        </a>

        <a className="email" target="_blank">
          <img src="./mail.svg" alt="Icon Email" />
          <span>{props.email}</span>
        </a>
      </div>
    </Container>
  );
}
