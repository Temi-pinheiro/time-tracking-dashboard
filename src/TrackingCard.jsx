import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

function TrackingCard(props) {
  const bgColors = {
    Work: 'hsl(15, 100%, 70%)',
    Play: 'hsl(195, 74%, 62%)',
    Study: 'hsl(348, 100%, 68%)',
    Exercise: 'hsl(145, 58%, 55%)',
    Social: ' hsl(264, 64%, 52%)',
    'Self Care': 'hsl(43, 84%, 65%)',
  };

  const { imgSrc, timeframes, title, timeframe } = props;

  const { daily, weekly, monthly } = timeframes;
  const [activeTimeframe, setActiveTimeframe] = useState(weekly);
  useEffect(() => {
    if (timeframe == 'weekly') {
      setToWeekly();
    }
    if (timeframe == 'monthly') {
      setToMonthly();
    }
    if (timeframe == 'daily') {
      setToDaily();
    }
  }, [timeframe]);

  const setToWeekly = () => {
    setActiveTimeframe(weekly);
    setCurrent(weekly.current);
    setPrevious(weekly.previous);
  };

  const setToMonthly = () => {
    setActiveTimeframe(monthly);
    setCurrent(monthly.current);
    setPrevious(monthly.previous);
  };

  const setToDaily = () => {
    setActiveTimeframe(daily);
    setCurrent(daily.current);
    setPrevious(daily.previous);
  };
  const [current, setCurrent] = useState(activeTimeframe.current);
  const [previous, setPrevious] = useState(activeTimeframe.previous);
  return (
    <TimeCard backgroundColor={`${bgColors[title]}`} imgSrc={imgSrc}>
      <CardInfo>
        <LeftSection>
          <h1>{title}</h1>
          <h3>{current}hrs</h3>
        </LeftSection>
        <RightSection>
          <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
              fill='#BBC0FF'
              fillRule='evenodd'
            />
          </svg>
          <h3>Last week - {previous}hrs</h3>
        </RightSection>
      </CardInfo>
    </TimeCard>
  );
}

const TimeCard = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 1em;
  margin-bottom: 1em;
  position: relative;
  padding-top: 3em;
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: 18%;
  background-position-x: right;
  background-position-y: -6px;
`;
const CardInfo = styled.section`
  color: hsl(236, 100%, 97%);
  background-color: hsl(235, 46%, 20%);
  display: flex;
  justify-content: space-between;
  padding: 1.6em;
  border-radius: 1em;
  margin-top: -15px;
  /* z-index: 5; */
  cursor: pointer;
  transition: all 120ms ease-in-out;

  &:hover {
    background-color: hsl(235, 46%, 30%);
  }
`;
const LeftSection = styled.section`
  h1 {
    font-weight: 500;
    font-size: 0.9em;
  }
  h3 {
    margin-top: 0.2em;
    font-weight: 300;
    font-size: 1.4em;
  }
`;
const RightSection = styled.aside`
  display: flex;
  justify-content: space-between;
  /* min-height: 100%; */
  flex-wrap: wrap;
  flex-direction: column;

  h3 {
    font-weight: 400;
    font-size: 0.8em;
    color: hsl(235, 45%, 61%);
    margin-top: 1em;
  }
  svg {
    align-self: flex-end;
    cursor: pointer;

    path {
      transition: all 120ms ease-in-out;
    }

    &:hover {
      path {
        fill: hsl(236, 100%, 97%);
      }
    }
  }
`;

export default TrackingCard;
