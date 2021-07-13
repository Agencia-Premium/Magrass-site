import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4.2rem;
  background-color: #fafafa;

  a {
    font-size: 1rem;
    font-weight: 700;
    line-height: 21px;
    text-decoration: none;
    color: #000000;
  }
  .logo-- {
    height: 100%;
  }
  .navbar {
    display: flex;
    align-items: center;
    gap: 2.7rem;

    .icon--social {
      margin-left: 2.6rem;
    }
  }
`;
