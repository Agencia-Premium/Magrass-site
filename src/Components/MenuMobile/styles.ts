import styled, { keyframes } from "styled-components";
import { darken } from "polished";
import Link from "next/link";
import { MenuMobileProps } from ".";

export const Wrapper = styled.div<MenuMobileProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;

  background: #00b5b3;

  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? "80%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const MenuWrapper = styled.div`
  color: #fff;
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none !important;
    color: #ffffff !important;
    font-weight: 700;
    cursor: pointer;
    :hover {
      color: ${darken(0.2, "rgba(241, 241, 241, 1)")};
      transition: 0.2s ease-in-out;
    }
  }
`;

export const LinkMenu = styled(Link)`
  display: flex;
`;

export const Icon = styled.div`
  position: absolute;
  top: 2.6rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
