import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    padding: 2rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(92, 99, 105, 0.2);

    h2 {
      font-weight: bold;
      margin-bottom: 3rem;
      color: #00b5b3;
      text-align: center;
    }

    .containerInput {
      position: relative;
      height: 4rem;
      margin-bottom: 1.8rem;

      .input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #a8a8b3;
        border-radius: 0.5rem;
        outline: none;
        padding: 1rem;
        background: none;
        z-index: 1;

        &:focus {
          border: 1.5px solid #a8a8b3;
        }
      }
      .label {
        position: absolute;
        left: 1rem;
        top: 1.1rem;
        padding: 0 0.25rem;
        background-color: #fff;
        font-size: 1.2rem;
        color: black;
        transition: 0.3s;
      }

      .input:focus + .label {
        top: -0.9rem;
        left: 0.8rem;
        color: black;
        font-weight: 500;
        z-index: 10;
      }

      select:focus + .label {
        top: -1rem !important;
      }

      .input:not(:placeholder-shown).input:not(:focus) + .label {
        top: -1rem;
        left: 0.8rem;
        font-weight: 500;
        z-index: 10;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      width: 100%;
      height: 4rem;
      padding: 0.75rem 2rem;
      margin-top: 2rem;
      outline: none;
      border: none;

      background-color: #00b5b3;
      color: #fff;
      border-radius: 0.5rem;
      cursor: pointer;

      transition: filter 0.2s;
    }

    button:hover {
      filter: brightness(0.9);
    }

    .separator {
      font-size: 1.4rem;
      color: #a8a8b3;

      padding: 0 4rem;

      margin: 1.4rem 0;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        flex: 1;
        height: 0.1rem;
        background: #a8a8b3;
        margin-right: 1.6rem;
      }

      &::after {
        content: "";
        flex: 1;
        height: 0.1rem;
        background: #a8a8b3;
        margin-left: 1.6rem;
      }
    }
  }
`;
