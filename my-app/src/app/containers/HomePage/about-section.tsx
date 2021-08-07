import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import SCREEN from '../../constants/screen';

import JeepImg from '../../../assets/images/jeep.png'

const AboutUsContainer = styled.div`
${
    tw`
     w-full
     flex
     flex-wrap
     items-center
     2xl:justify-center
     pt-4
     pb-4
     pr-7
     pl-7
     md:pl-0
     md:pr-0
     bg-white
    `
}

@media (max-width:${SCREEN.sm}){
    display:flex;
    flex-direction:column-reverse;
    align-items:stretch;
    justify-content:stretch;
}
 
`

const CarContainer = styled.div`
 width : auto;
 height : 15em;
 margin-left : -30px;
 img{
     width:auto;
     height:100%;
 }

 @media (min-width: ${SCREEN.md}){
     height: 18em;
 }

 @media (min-width: ${SCREEN.xl}){
    height: 25em;
}
@media (min-width: ${SCREEN["2xl"]}){
    height: 30em;
    margin-left : 0;
}
`

const InfoContainer = styled.div`
 ${
     tw`
        w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16

     `
 }

 @media (max-width:${SCREEN.sm}){
     width:100%;
 }
`

const Title = styled.h1`
 ${
     tw`
      text-black
      text-2xl
      md:text-4xl
      font-extrabold
      md:font-black
      md:leading-normal
     `
 }
`

const InfoText = styled.p`
 ${
     tw`
      text-sm
      md:text-base
      text-gray-500
      max-w-2xl
      mt-4
      font-normal
     `
 }
`

function AboutSection() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt="car"></img>
            </CarContainer>
            <InfoContainer>
                <Title>
                    Feel the best experience with our Rental Deals
                </Title>
                <InfoText>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti saepe aut porro. Nostrum harum obcaecati sunt tenetur atque omnis eum, facilis eius tempora ratione ab beatae earum nihil rem repellat?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti saepe aut porro. Nostrum harum obcaecati sunt tenetur atque omnis eum, facilis eius tempora ratione ab beatae earum nihil rem repellat?
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )
}

export default AboutSection
