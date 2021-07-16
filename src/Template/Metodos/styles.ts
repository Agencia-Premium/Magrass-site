import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #caf4f5;

  .containerText {
    margin: 10rem 0 5rem 0;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: justify;

    .title--text {
      margin-bottom: 1.2rem;
      font-size: 2.6rem;
      font-weight: 700;
      line-height: 54px;
    }
    .subtitle {
      width: 100%;
      font-size: 1.4rem;
      text-align: center;

      span {
        color: #00b5b3;
      }
    }
  }
  @media screen and (min-width: 1400px) {
    .containerText {
      .title--text {
        font-size: 3.6rem;
      }
      .subtitle {
        width: 50%;
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
`;
