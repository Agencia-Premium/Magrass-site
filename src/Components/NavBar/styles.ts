import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fafafa;
  border-bottom: 1px solid #dadada;

  .navbar {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2.7rem;
    padding-right: 2.3rem;

    .icon--instagram {
      margin-left: 2.6rem;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  a {
    height: 66%;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 21px;
    text-decoration: none;
    color: #000000;
  }
  a:hover {
    color: #00b5b3;
    border-bottom: 3px solid #00b5b3;
  }

  .logo-- {
    padding-left: 2.3rem;
    height: 100%;
    @media screen and (max-width: 768px) {
      height: 5rem;
    }
  }
  @media screen and (min-width: 780px) {
    border-bottom: none;
    .logo-- {
      padding-left: 6rem;
      width: 20%;
      margin: 1rem;
    }
    .navbar {
      padding-right: 6rem;
    }
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    color: #00b5b3;
    margin-right: 2.3rem;
    width: 5%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    svg {
      width: 118%;
      height: 10%;
    }
  }
`;
