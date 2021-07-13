import React, { FormEvent, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Container } from "./styles";






export default function Form() {
  const [userName, setUserName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("entrando na condição");
    
    if (userName !== "" && tel !== "" && email !== "" && cep !== "") {
      console.log("passou da condição");
      console.log("entrando na api");
      
      axios
        .post("/api/mail", {
          userName,
          tel,
          email,
          cep,
        })
        .then(() => {
          setUserName("");
          setTel("");
          setEmail("");
          setCep("");
          toast.success("Formulário enviado com secesso!", {
            id: email,
            style: {
              width: "auto",
            },
          });
        })
        .catch(() => {
          toast.error(
            "Erro ao enviar o formulário! Por favor, tente novamente mais tarde."
          );
        });
        console.log("saindo da api");
        
    }
  }

  //mask para inputs
  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };
  //mask para cep
  const maskCEP = (value) => {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome"
            className="nome"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
          <label htmlFor="t">Telefone</label>
          <input
            type="text"
            id="t"
            // name="telefone"
            placeholder="Seu telefone"
            className="telefone"
            onChange={(e) => setTel(maskPhone(e.target.value))}
            value={tel}
          />
          <label htmlFor="e">E-mail</label>
          <input
            type="email"
            id="e"
            // name="email"
            placeholder="Seu e-mail"
            className="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="C">CEP</label>
          <input
            type="text"
            id="C"
            placeholder="Seu CEP"
            className="cep"
            onChange={(e) => setCep(maskCEP(e.target.value))}
            value={cep}
          />
          <button
            type="submit"
            // name="button"
            value="Enviar dados"
            className="botao"
          >
            Enviar
          </button>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    </>
  );
}
