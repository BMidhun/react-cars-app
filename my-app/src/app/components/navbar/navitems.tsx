/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import SCREEN from "../../constants/screen";
import SideMenuStyle from "./styles/sidemenu.styles";

const NavlistContainer = styled.ul`
  ${tw`
  flex
  list-none
`}
`;

const NavlistItem = styled.li<{ menu?: any }>`
  ${tw`
 text-xs
 md:text-base
 text-black
 font-medium
 mr-1
 md:mr-5
 cursor-pointer
 transition
 duration-300
 ease-in-out
 hover:text-gray-700
`}
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
   text-white
   text-xl
   mb-3
   focus:text-white
  `}
    `}
`;

function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREEN.sm });

  if (isMobile) {
    return (
      <Menu right styles={SideMenuStyle}>
        <NavlistContainer>
          <NavlistItem menu>
            <a href="#">Home</a>
          </NavlistItem>
          <NavlistItem menu>
            <a href="#">About</a>
          </NavlistItem>
          <NavlistItem menu>
            <a href="#">Services</a>
          </NavlistItem>
          <NavlistItem menu>
            <a href="#">Contact Us</a>
          </NavlistItem>
        </NavlistContainer>
      </Menu>
    );
  }

  return (
    <NavlistContainer>
      <NavlistItem>
        <a href="#">Home</a>
      </NavlistItem>
      <NavlistItem>
        <a href="#">About</a>
      </NavlistItem>
      <NavlistItem>
        <a href="#">Services</a>
      </NavlistItem>
      <NavlistItem>
        <a href="#">Contact Us</a>
      </NavlistItem>
    </NavlistContainer>
  );
}

export default NavItems;
