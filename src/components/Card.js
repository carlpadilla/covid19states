import React from 'react';

const Card = ({
  name,
  cases,
  todayCases,
  deaths,
  todayDeaths,
  recovered,
  active
}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 dim bw2 shadow-5'>
      <img
        src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.republicworld.com%2Frepublic-prod%2Fstories%2Fpromolarge%2Fxxhdpi%2Fnnafbi8iiow7vnri_1584534996.jpeg%3Ftr%3Df-jpeg&f=1&nofb=1`}
        alt='test'
      />
      <div>
        <h2>{name}</h2>
        <p>Cases: {cases}</p>
        <p>Cases Today: {todayCases}</p>
        <p>Deaths: {deaths}</p>
        <p>Deaths Today: {todayDeaths}</p>
        {/*<p>Recovered: {recovered}</p>
  <p>Active: {active}</p>*/}
      </div>
    </div>
  );
};

export default Card;
