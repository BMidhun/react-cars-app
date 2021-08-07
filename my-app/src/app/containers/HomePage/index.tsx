import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'
import BookCard from '../../components/bookCard/bookCard'
import Marginer from '../../components/marginer/Marginer'
import Navbar from '../../components/navbar'
import AboutSection from './about-section'
import BookingSteps from './bookingsteps'
import TopCars from './topcars'
import TopSection from './topsection'

const PageComponent = styled.div`
 ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`

const HomePageContainer = () => {
    return <PageComponent>
       <Navbar />
       <TopSection />
       <Marginer direction="vertical" margin="4em"/>
       <BookCard />
       <Marginer direction="vertical" margin="6em"/>
       <BookingSteps />
       <Marginer direction="vertical" margin="5em"/>
       <AboutSection />
       <Marginer direction="vertical" margin="5em"/>
       <TopCars />
    </PageComponent>
}

export default HomePageContainer;
