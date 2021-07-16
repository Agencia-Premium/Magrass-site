import React from "react";
import Head from "next/head";
import HomePage from "../Template/Home/index";
import NavBar from "../Components/NavBar";
import Sobre from "../Template/Sobre";
import Metodo from "../Template/Metodos";
import Contato from "../Template/Contato";
import Presente from "../Template/Presente";
import { Footer } from "../Components/Footer";

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
        <Presente />
        <Contato />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
