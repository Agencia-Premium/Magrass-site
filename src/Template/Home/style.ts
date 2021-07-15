import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 70%; */
  /* background-color: aqua; */

  .container--text {
    margin-top: 5rem;
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
      margin-top: 2.5rem;
      width: 100%;
      height: 30rem;
      background-image: url("./moca.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 0.5rem;
    }

    .subtitulo {
      margin-top: 2.7rem;
      font-size: 1.4rem;
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
