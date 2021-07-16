import styled, { keyframes } from "styled-components";

export const appearFromFooter = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(-0px)
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 23.7rem;
  padding: 0 20rem;
  background: #00b5b3;
  color: #fff;

  animation: ${appearFromFooter} 1s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 0.4rem 2rem rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 920px) {
    padding: 0 8rem;
  }

  @media screen and (max-width: 780px) {
    padding: 0 3rem;
  }

  .text {
    font-size: 1.3rem;
    width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
      font-size: 1.6rem;

      a {
        text-decoration: none;
        padding-left: 0.4rem;
        color: #fff;
      }
    }

    img {
      max-width: 22.7rem;
    }

    @media screen and (min-width: 780px) {
    }
  }

  .icons {
    width: 54%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    gap: 2rem;

    @media screen and (max-width: 780px) {
      display: none;
    }
  }
`;
