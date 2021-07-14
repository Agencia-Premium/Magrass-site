import React from "react";
import Head from "next/head";
import HomePage from "../Template/Home/index";
import NavBar from "../Components/NavBar";
import Sobre from "../Template/Sobre";
import Metodo from "../Template/Metodos";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Formulário Padrão</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <HomePage />
        <Sobre />
        <Metodo />
      </main>
    </div>
  );
};
export default Home;
