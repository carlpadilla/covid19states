import React from 'react';
import Card from './Card';

const CardList = ({ state }) => {
  // console.log(state);
  return (
    <div>
      {' '}
      {state.map((user, i) => {
        return (
          <Card
            key={i}
            id={state[i].id}
            name={state[i].state}
            cases={state[i].cases}
            todayCases={state[i].todayCases}
            deaths={state[i].deaths}
            todayDeaths={state[i].todayDeaths}
            // recovered={state[i].recovered}
            // active={state[i].recovered}
          />
        );
      })}
    </div>
  );
};

export default CardList;
