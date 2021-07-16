import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;

  justify-content: center;

  .containerSobre {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;

    .text--titulo {
      margin-top: 2rem;
      font-size: 2.6rem;
      font-weight: 700;
      line-height: 54px;
    }
    .logoSobre {
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: 50%;
    }

    .Moças--magrass {
      width: 100%;
      height: 25rem;
      background-image: url("/fotoSobre.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border-radius: 0.5rem;
    }

    .TextSobre {
      margin-top: 2rem;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 24px;
      text-align: justify;
      color: #767676;
    }
    .container--icons {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      margin: 5.3rem 0;

      .--icons {
        text-align: center;
      }
      .unidade {
        margin: 1rem;
      }

      p {
        text-align: center;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2.4rem;
        color: #00b5b3;
      }
    }
  }
  //mobile
  @media screen and (max-width: 768px) {
    .containerSobre {
      .logoSobre {
        display: flex;
      }

      .Moças--magrass {
        display: flex;
      }
      .containerDirections {
        display: flex;
        .Left {
          display: none;
          img {
          }
        }

        .Right {
          .logoMagrassPc {
            display: none;
          }
        }
        .container--icons {
          margin: 2rem auto;
        }
      }
    }
  }
  //pc geral
  @media screen and (min-width: 780px) {
    .containerSobre {
      margin-bottom: 5rem;
      .logoSobre {
        display: none;
      }

      .Moças--magrass {
        display: none;
      }
      .containerDirections {
        display: flex;
        gap: 5rem;
        .Left {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          img {
            width: 100%;
            border-radius: 0.5rem;
          }
        }

        .Right {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .logoMagrassPc {
            width: 50%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1400px) {
    .containerSobre {
      .text--titulo {
        margin: 5rem;
        font-size: 3.6rem;
      }
    }

    .containerDirections {
      .Right {
        .TextSobre {
          font-size: 1.8rem;
        }
      }
    }
  }
`;
