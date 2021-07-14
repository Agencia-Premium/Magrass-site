import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 70%; */
  /* background-color: aqua; */

  .container--text {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    /* background-color: aliceblue; */

    .titulo--principal {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.4rem;

      span {
        color: #00b5b3;
      }
    }

    .Image {
      margin-top: 2rem;
      width: 100%;
      height: 10rem;
      /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 81%); */
      background-image: url("./moca.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 0.2rem;
    }

    .subtitulo {
      margin-top: 2.7rem;
      font-size: 1.2rem;
      line-height: 2.3rem;
      text-align: justify;
      color: #767676;
    }

    .botao {
      margin-top: 2rem;
      font-size: 16px;
      color: #ffffff;
      width: 24.2rem;
      height: 4.5rem;
      background-color: #00b5b3;
      border-style: none;
      border-radius: 0.5rem;
    }
  }
`;
