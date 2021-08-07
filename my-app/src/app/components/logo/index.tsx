import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarImage from "../../../assets/images/car-logo.png";
import CarLogoDark from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
 `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
`}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const ImageContainer = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`}
  img {
    width: auto;
    height: 100%;
  }
`;

function Logo(props: ILogoProps) {
  const { color, bgColor } = props;
  return (
    <LogoContainer>
      <ImageContainer>
        <img src={bgColor === "dark" ? CarLogoDark : CarImage} alt="logo.png" />
      </ImageContainer>
      <LogoText color={color || "dark"}>Yourcar.</LogoText>
    </LogoContainer>
  );
}

export default Logo;
