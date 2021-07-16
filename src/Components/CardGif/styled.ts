import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  border-bottom: 4px solid #00b5b3;
  transition: 0.3s transform;

  &:hover {
    transform: scale(1.04);
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem 0;
    width: 40rem;
  }
  .Container--text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .image {
    }
    .aspa {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
    }
    .titulo {
      margin: 2rem 0;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 2.8rem;
      color: #00b5b3;
    }

    .descricao {
      width: 80%;
      font-size: 1.6rem;
      text-align: justify;
      line-height: 1.8rem;

      .--tipo {
        display: inline-block;
        left: 0;
      }
    }
    .--text2 {
      text-indent: 20px;
    }

    @media screen and (min-width: 1024px) {
      padding: 2rem 0;

      .titulo {
        width: 80%;
        font-size: 1.8rem;
      }
      .image {
        width: 20%;
      }
    }

    @media screen and (max-width: 769px) {
      padding: 2rem 0;
      .titulo {
        width: 80%;
        font-size: 1.6rem;
      }
      .image {
        width: 40%;
      }
    }

    @media screen and (max-width: 426px) {
      .titulo {
        width: 80%;
      }
      .image {
        width: 20%;
      }
    }

    @media screen and (max-width: 376px) {
      .titulo {
        width: 80%;
      }
      .image {
        width: 20%;
      }
    }

    @media screen and (max-width: 321px) {
      padding: 2rem 0;
      .titulo {
        width: 80%;
      }
      .image {
        width: 20%;
      }
    }
  }
`;
