import styled from "styled-components";

export const Container = styled.div`
  width: 35rem;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  border-radius: 0.5rem;
  border-bottom: 4px solid #00b5b3;
  box-shadow: 0 0 4px 4px rgba(92, 99, 105, 0.2);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 870px) {
    width: 28rem;
  }
  .card {
    padding: 2rem;

    h3 {
      font-size: 1.6rem;
      text-align: center;
      color: #00b5b3;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .fone,
    .address,
    .email {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      img {
        padding-right: 1.4rem;
      }
    }

    p {
      width: 80%;
      font-size: 1.6rem;
      font-weight: 400;
      color: #767676;
      text-align: center;
    }
  }
`;
