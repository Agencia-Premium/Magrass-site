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
  }
`;
