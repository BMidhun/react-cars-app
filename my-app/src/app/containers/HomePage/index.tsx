import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

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
        Hello World
    </PageComponent>
}

export default HomePageContainer;
