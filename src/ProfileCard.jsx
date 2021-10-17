import React, { useState } from 'react';
import styled from 'styled-components';

function ProfileCard(props) {
  const { name, pfp, timeframeChanger } = props;
  const [active, setActive] = useState('weekly');

  const handleClick = (e) => {
    setActive(e.target.innerHTML.toLowerCase());
    console.log(active);
    timeframeChanger(e.target.innerHTML.toLowerCase());
  };
  return (
    <CardContainer>
      <NameSection>
        <img src={pfp} />
        <TextSection>
          <h3>Report For</h3>
          <h1>{name}</h1>
        </TextSection>
      </NameSection>
      <TimeframesSection>
        <span
          onClick={handleClick}
          className={active == 'daily' ? 'active' : ''}
        >
          Daily
        </span>
        <span
          onClick={handleClick}
          className={active == 'weekly' ? 'active' : ''}
        >
          Weekly
        </span>
        <span
          onClick={handleClick}
          className={active == 'monthly' ? 'active' : ''}
        >
          Monthly
        </span>
      </TimeframesSection>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border-radius: 1em;
  width: 100%;
  background-color: hsl(235, 46%, 20%);
  margin-bottom: 1em;
`;
const NameSection = styled.section`
  background-color: hsl(246, 80%, 60%);
  border-radius: 1em;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-top: 2em;
  padding-bottom: 2em;

  img {
    width: 18vw;
    border-radius: 50%;
    border: 2px solid white;
    margin-right: 2em;
    margin-left: 2.5em;
  }
`;
const TimeframesSection = styled.section`
  display: flex;
  justify-content: space-between;
  color: hsl(235, 45%, 61%);
  background-color: hsl(235, 46%, 20%);
  font-size: 1em;
  align-items: center;
  padding: 1em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  /* margin-top: -1em; */
  z-index: -2;

  span {
    cursor: pointer;
    transition: color 120ms ease-in-out;

    &:hover {
      color: hsl(236, 100%, 80%);
    }
  }

  .active {
    color: hsl(236, 100%, 87%);
  }
`;
const TextSection = styled.section`
  color: white;

  h3 {
    font-weight: 300;
    font-size: 0.9em;
  }

  h1 {
    font-weight: 300;
    font-size: 1.3em;
    margin-top: 0.3em;
  }
`;

export default ProfileCard;
