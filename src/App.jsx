import { useState } from 'react';
import './App.css';
import parsedData from '../data';
import { useEffect } from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import TrackingCard from './TrackingCard';

function App() {
  const [timeTrackers, setTimeTrackers] = useState([]);
  const [timeFrame, setTimeFrame] = useState('weekly');
  useEffect(() => {
    const data = JSON.parse(parsedData);
    setTimeTrackers(data);

    return () => {};
  }, []);

  const handleTimeframeChange = (key) => {
    setTimeFrame(key);
  };

  const printData = (data) => {
    return data.map((track) => {
      return (
        <TrackingCard
          timeframe={timeFrame}
          title={track.title}
          timeframes={track.timeframes}
          imgSrc={track.img}
          key={track.title}
        />
      );
    });
  };

  return (
    <div className='App'>
      <Container>
        <ProfileCard
          name='Jeremy Robson'
          pfp='../images/image-jeremy.png'
          timeframeChanger={handleTimeframeChange}
        />
        <TrackingCards>{printData(timeTrackers)}</TrackingCards>
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding: 4em 2em;
`;
const TrackingCards = styled.div``;

export default App;
