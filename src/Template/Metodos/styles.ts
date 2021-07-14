import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d6d6d6;

  .containerText {
    margin-top: 10rem;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: justify;

    .title--text {
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
`;
