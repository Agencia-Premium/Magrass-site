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

    .icon--instagram {
      margin-left: 2.6rem;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  a {
    margin-top: 4%;
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
    height: 100%;
    @media screen and (max-width: 768px) {
      height: 5rem;
    }
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    color: #00b5b3;
    margin-right: 5.3rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    svg {
      width: 10%;
      height: 10%;
    }
  }
`;
