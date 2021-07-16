import styled, { keyframes } from "styled-components";

export const appearFromImage = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const appearFromContent = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-left: 4rem;

    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0;
    }

    img {
      width: 100%;
      animation: ${appearFromImage} 2s;
    }

    .left {
      padding-top: 16rem;
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;

      animation: ${appearFromContent} 2s;

      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 6rem 4rem 0;
      }

      .titulo--principal {
        font-size: 3.6rem;
        font-weight: 700;

        @media screen and (max-width: 1520px) {
          padding-right: 2rem;
        }

        @media screen and (max-width: 426px) {
          padding: 0;
        }

        span {
          color: #00b5b3;
          padding-left: 0.4rem;
        }
      }

      .subtitulo {
        margin-top: 2.7rem;
        font-size: 1.8rem;
        padding-right: 4rem;
        line-height: 2.6rem;
        text-align: justify;
        color: #767676;

        @media screen and (max-width: 426px) {
          padding: 0;
        }
      }

      .botao {
        margin-top: 10rem;
        font-size: 16px;
        color: #ffffff;
        width: 50%;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 4rem;

        background-color: #00b5b3;
        border-style: none;
        border-radius: 0.5rem;
        text-align: center;
        text-decoration: none;

        transition: filter 0.2s;

        @media screen and (max-width: 1025px) {
          margin-top: 4rem;
          width: 90%;
        }

        @media screen and (max-width: 768px) {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 4rem 0;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
      @media screen and (min-width: 1400px) {
        .left {
          width: 50%;
        }

        .content {
        }
        .subtitulo {
          text-align: justify;
          font-size: 2rem;
        }
      }
    }

    .right {
      width: 50%;

      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 4rem;
      }

      img {
        height: 100%;
      }
    }
  }
`;
