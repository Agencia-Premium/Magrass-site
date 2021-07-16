import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #ffffff;
  padding: 10rem 0;

  .Container--Text {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 80%;
    text-align: center;
    gap: 1.2rem;
    .text--Title {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.6rem;
    }
    .text--Description {
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-align: justify;
      margin: 2.5rem 0;
      span {
        color: #00b5b3;
      }
    }
  }
  @media screen and (min-width: 1299px) {
  }
  //tablet
  @media screen and (max-width: 769px) {
    .Container--Text {
      display: flex;
      align-items: center;
      .text--Description {
        width: 80%;
      }
    }
  }

  @media screen and (min-width: 1025px) {
    .Container--Text {
      display: flex;
      align-items: center;
      .text--Title {
        font-size: 3.6rem;
      }
      .text--Description {
        font-size: 1.8rem;
        line-height: 2.4rem;
        width: 70%;
      }
    }
  }
`;
export const ContainerCardGif = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  padding: 0 2rem;
  margin: 0 auto;

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20rem;
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
`;
