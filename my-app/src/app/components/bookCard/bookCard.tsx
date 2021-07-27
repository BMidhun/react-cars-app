import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Button from "../button";
import Marginer from "../marginer/Marginer";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

const CardContainer = styled.div`
 min-height: 4.3em;
 box-shadow : 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
      relative
      flex
      sm:flex-row
      justify-center
      items-center
      rounded-md
      bg-white
      pt-1
      pb-1
      pr-2
      pl-2
      md:pt-2
      md:pb-2
      md:pl-9
      md:pr-9
     `}
`;

const ItemContainer = styled.div`

  ${tw`flex items-center`}
`;

const Icon = styled.span`
  ${tw`
 text-red-500
 fill-current
 text-xs
 md:text-base
 mr-1
 md:mr-3
`}
`;

const Name = styled.span<{isactive?:any}>`
  ${tw`
  text-gray-600
  text-xs
  md:text-sm
`}
 ${({isactive}) => isactive && css `${tw`
    text-red-500
    `}`}
`;
const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
  bg-gray-300
  mr-2
  ml-2
  md:mr-5
  md:ml-5
 `}
`;

const DateCalendar = styled(Calendar)`
 position : absolute;
 max-width : none;
 top : 3.5em;
 left : -2em;
`

const BookCard = () => {

 const [startDate, setStartDate] = useState<Date>(new Date());
 const [openStartCalendar,setOpenStartCalendar] = useState(false);

 const [endDate,setEndDate] = useState<Date>(new Date());
 const [openEndCalendar,setOpenEndCalendar] = useState(false);

 const controlCalendar = (e:any,type:string) => {
    //  console.log(e.target)
        if(type==="start"){
            setOpenStartCalendar(prev => !prev);
            setOpenEndCalendar(false);
        }
        else{
            setOpenEndCalendar(prev => !prev);
            setOpenStartCalendar(false);
        }
 }

 console.log(startDate,endDate)

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} onClick={(e) => controlCalendar(e,"start")}/>
        </Icon>
        <Name isactive={openStartCalendar}>Pick Up Date</Name>
        {openStartCalendar && <DateCalendar value={startDate} onChange={setStartDate as any}/>}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} onClick={(e) => controlCalendar(e,"end")}/>
        </Icon>
        <Name isactive={openEndCalendar}>Return Date</Name>
        {openEndCalendar && <DateCalendar value={endDate} onChange={setEndDate as any}/>}
      </ItemContainer>
    <Marginer direction="horizontal" margin="2em"/>
    <Button text="Book Your Ride" theme="filled"/>
    </CardContainer>
  );
};

export default BookCard;
