import styled from "styled-components";

export const Container = styled.div`
  /* background: blue; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    /* background: red; */
    display: flex;
    flex-direction: column;
    padding: 10rem;
    gap input {
      font-size: 1.5rem;
    }
    button {
      width: 100%;
    }
  }
`;
