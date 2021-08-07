import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  ${tw`
    flex
    flex-col
    min-w-full
    bg-gray-800
    pt-4
    md:pt-12
    pb-3
    items-center
    justify-center
    `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    pl-10
    pr-10
    md:p-10
    `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    mb-7
    md:mr-10
    md:mb-0
    `}
`;

const AboutText = styled.p`
  ${tw`
     text-white
     text-sm
     font-normal
     max-w-xs
     leading-5
     mt-2
    `}
`;

const SectionContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-full
      md:w-auto
      md:mr-5
      xl:mr-16
     `}
`;

const LinksList = styled.ul`
  ${tw`
         outline-none
         list-none
         flex
         flex-col

        `}
`;

const ListItem = styled.li`
  ${tw`
      mb-3
     `}

  & > a {
    ${tw`
         text-sm
         text-white
         transition-all
         hover:text-gray-200
         `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
      text-xl
      font-bold
      text-white
      mb-3
     `}
`;

const HorizontalContainer = styled.div`
  ${tw`
      flex
        items-center
     `}
`;

const RedIcon = styled.span`
  ${tw`
     w-8
     h-8
     rounded-full
     flex
     items-center
     bg-red-500
     justify-center
     text-white
     text-base
     mr-2
    `}
`;

const SmallText = styled.h6`
  ${tw`
      text-sm
      text-white
     `}
`;

const BottomContainer = styled.div`
  ${tw`
      flex
      mt-6
     `}
`;

const CopyrightText = styled.small`
  font-size: 14px;
  ${tw`
    text-gray-400
    `}
`;

function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the whole world which has high quality cars and top
            rated services.
          </AboutText>
        </AboutContainer>

        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>

          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>

          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 555-234-8469</SmallText>
          </HorizontalContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Email Us</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourscar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>

      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}

export default Footer;
