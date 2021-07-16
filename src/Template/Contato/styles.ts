import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 6rem 0;
  flex-direction: column;
  justify-content: center;

  .content {
    width: 100%;
    @media screen and (min-width: 1024px) {
      display: flex;
      width: 100%;
    }
    .formulario {
      width: 100%;
      padding: 0 2rem;

      @media screen and (min-width: 1024px) {
        width: 60%;
      }
    }
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: 2.4rem;
      text-align: center;
    }

    p {
      text-align: center;
      padding: 0.9rem 4rem;
      font-size: 1.6rem;

      span {
        color: #00b5b3;
        font-weight: bold;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .description {
      p {
        width: 80%;
        font-size: 1.8rem;
      }
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 0 2rem;
  margin: 0 auto;

  .title {
    h2 {
      color: #00b5b3;
      font-size: 1.8rem;
      text-align: center;
      margin: 2rem 0;
    }
  }

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 1020px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    @media screen and (max-width: 670px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
