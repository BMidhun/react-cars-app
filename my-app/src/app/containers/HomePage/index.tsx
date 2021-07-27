import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'
import BookCard from '../../components/bookCard/bookCard'
import Navbar from '../../components/navbar'
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
       <BookCard />
    </PageComponent>
}

export default HomePageContainer;
