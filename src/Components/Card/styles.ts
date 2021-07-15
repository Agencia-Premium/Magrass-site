import styled from "styled-components";

export const Container = styled.div`
  width: 35.2rem;
  height: 35.2rem;
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  border-radius: 0.5rem;
  border-bottom: 4px solid #00b5b3;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.04);
  }

  @media screen and (max-width: 870px) {
    width: 28rem;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    h3 {
      width: 70%;
      font-size: 1.8rem;
      line-height: 2.7rem;
      text-align: center;
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
