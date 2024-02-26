import React from 'react';
import { TimeSearch } from './TimeSearch';
import { TimeList } from './TimeList';
import { TimeItem } from './TimeItem';
import { CreateButton } from './CreateButton';
import { ClockCounter } from './ClockCounter';
import './App.css';

const defaultItem = [
  { text: "Paris", day: true },
  { text: "New York", day: true },
  { text: "Caracas", day: true },
  { text: "Tokyo", day: false },
  { text: "Amsterdam", day: false },
];

function App() {
  return (
    <main className='main-box'>

      <section className='search-box'>

        <div className='clock-search'>
         <ClockCounter total={5}/>
          <TimeSearch/>
        </div>

        <div className='button-box'>
          <CreateButton/>
        </div>
      </section>

      <section className='clock-box'>
        <TimeList>
          {(defaultItem.length === 0)
              ? (<p className='no-clocks'>Add a new clock!</p>)
              : defaultItem.map((clock) => (
                <TimeItem
                  key= {clock.text}
                  text= {clock.text}
                  day= {clock.day}
                />
              ))}
        </TimeList>
      </section>

    </main>
  );
}

export default App;
