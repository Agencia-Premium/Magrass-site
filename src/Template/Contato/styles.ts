import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 6rem;
  flex-direction: column;
  justify-content: center;

  .content {
    @media screen and (min-width: 1100px) {
      display: flex;
      width: 100%;
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

  .formulario {
    width: 100%;
    padding: 0 2rem;

    @media screen and (min-width: 1200px) {
      width: 60%;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 0 2rem;
  margin: 0 auto;

  h2 {
    color: #00b5b3;
    font-size: 1.8rem;
    text-align: center;
    margin: 2rem 0;
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 766px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 0;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    padding: 0;
  }

  @media screen and (min-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;
