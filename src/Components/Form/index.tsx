import React, { FormEvent, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Container } from "./styles";

export default function Form() {
  const [name, setName] = useState("");
  const [fone, setFone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [unity, setUnity] = useState("");
  const [treatment, setTratment] = useState("");

  //mask para inputs
  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };

  const treatmentData = [
    {
      id: 1,
      name: "Emagrecimento Saudável",
    },
  ];

  const cityData = [
    {
      id: 1,
      name: "Ji-Paraná",
      phone: "5569984834744",
    },
    {
      id: 2,
      name: "Cacoal",
      phone: "556993990680",
    },
    {
      id: 3,
      name: "Vilhena",
      phone: "556984911441",
    },
  ];

  let validationForm = false;

  if (
    name !== "" &&
    fone !== "" &&
    email !== "" &&
    city !== "" &&
    unity !== "" &&
    treatment !== ""
  ) {
    validationForm = true;
  }

  function sendWhatsapp() {
    if (validationForm) {
      const message = `Olá, meu nome é *${name}*, sou de *${city}*. Tenho interesse em fazer o seguinte tratamento: *${treatment}*, na seguinte cidade: *${unity}*`;

      let phoneToUnity = "";

      if (unity === "Ji-Paraná") phoneToUnity = cityData[0].phone;
      if (unity === "Cacoal") phoneToUnity = cityData[1].phone;
      if (unity === "Vilhena") phoneToUnity = cityData[2].phone;

      const link = `https://api.whatsapp.com/send?phone=${phoneToUnity}&text=${message}`;
      window.open(link);
    } else {
      toast.error("Preencha todos os campos!", {
        id: email,
      });
    }
  }

  async function sendToSolite() {
    await axios
      .post("https://api.solite.tk/leads", {
        name: name,
        phone: fone,
        email: email,
        client_fk: "9831cfe7-6271-4f7c-bf32-d3fe443f5583",
      })
      .then(() => {
        toast.success("Formulário enviado com sucesso!", {
          id: email,
        });
      });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (validationForm) {
      await sendToSolite();
      setName("");
      setFone("");
      setEmail("");
      setCity("");
      setUnity("");
      setTratment("");
    }
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <h2>Formulario Magrass de Atendimento</h2>

          <div className="containerInput">
            <input
              type="text"
              placeholder=" "
              className="input"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <label htmlFor="" className="label">
              Nome
            </label>
          </div>

          <div className="containerInput">
            <input
              type="email"
              placeholder=" "
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="" className="label">
              E-mail
            </label>
          </div>

          <div className="containerInput">
            <input
              type="text"
              placeholder=" "
              className="input"
              onChange={(e) => setFone(maskPhone(e.target.value))}
              value={fone}
              required
            />

            <label htmlFor="" className="label">
              Telefone
            </label>
          </div>

          <div className="containerInput">
            <input
              type="text"
              placeholder=" "
              className="input"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />

            <label htmlFor="" className="label">
              Cidade
            </label>
          </div>

          <div className="containerInput">
            <select
              value={unity}
              className="input"
              onChange={(e) => setUnity(e.target.value)}
            >
              <option value=""> Selecione uma cidade </option>
              {cityData.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <label htmlFor="" className="label">
              Em qual cidade deseja ser atendido(a)?
            </label>
          </div>

          <div className="containerInput">
            <select
              value={treatment}
              className="input"
              onChange={(e) => setTratment(e.target.value)}
            >
              <option value=""> Selecione um tratamento </option>
              {treatmentData.map((item, index) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <label htmlFor="" className="label">
              Qual o tratamento do seu interesse?
            </label>
          </div>

          <button type="submit">
            <img src="./buttonEnviar.svg" alt="Send Form" /> Enviar
          </button>

          <div className="separator">OU</div>

          <button type="button" onClick={sendWhatsapp}>
            <img src="./buttonZap.svg" alt="Contact whatsapp" /> Entrar em
            contato via WhatsApp
          </button>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    </>
  );
}
