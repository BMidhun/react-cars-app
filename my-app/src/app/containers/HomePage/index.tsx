import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'
import Navbar from '../../components/navbar'

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
    </PageComponent>
}

export default HomePageContainer;
