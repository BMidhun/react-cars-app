import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faCarSide, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'


const Container = styled.div`
 ${
     tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
     `
 }
`

const Title = styled.h2`
    ${
        tw`
        text-xl
        lg:text-4xl
        text-black
        font-extrabold
        `
    }
`

const StepsContainer = styled.div`
 ${
     tw`
        flex
        w-full
        flex-col
        lg:flex-row
        justify-evenly
        flex-wrap
        md:mt-7
        lg:mt-16
     `
 }
`

const StepContainer = styled.div`
 ${
     tw`
      flex
      flex-col
      mt-4
      items-center
      transition-colors
      hover:text-red-500
     `
 }
`

const Step = styled.div`
${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6

 `}
`
const StepTitle = styled.h4`
${tw`
  text-black
  text-lg
  font-semibold
  mt-3
`}
`

const StepDescription = styled.p`
${
    tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
    `
}
`

const StepIcon  = styled.p`
 ${
     tw`
      text-red-500
      text-3xl  
     `
 }
`

function BookingSteps() {
    return (
        <Container>
            <Title>Our Working Steps</Title>
            <StepsContainer>
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faMapMarkedAlt}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>Choose Location</StepTitle>
                    <StepDescription>
                        Find the nearest Your car point and book your car.
                    </StepDescription>
                </StepContainer>

                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>Pick-Up Date</StepTitle>
                    <StepDescription>
                        Pickup the best date to rent your car
                    </StepDescription>
                </StepContainer>

                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faCarSide}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>Book Your Car</StepTitle>
                    <StepDescription>
                        Book your nice car with ease in one single click
                    </StepDescription>
                </StepContainer>

            </StepsContainer>
        </Container>
    )
}

export default BookingSteps
