import React from 'react';
import { TimeSearch } from './TimeSearch';
import { TimeList } from './TimeList';
import { TimeItem } from './TimeItem';
import { CreateButton } from './CreateButton';
import { ClockCounter } from './ClockCounter';
import './App.css';

// const defaultClocks = [
//   { text: "Paris", day: true },
//   { text: "New York", day: true },
//   { text: "Caracas", day: true },
//   { text: "Tokyo", day: false },
//   { text: "Amsterdam", day: false }
// ];

// localStorage.setItem("clocks_beta", defaultClocks);
// localStorage.removeItem("clocks_beta");

function App() {

  const clocksFromStorage = localStorage.getItem("clocks_beta");

  let parsedClocks;
  
  if (!clocksFromStorage) {
    localStorage.setItem('clocks_beta', JSON.stringify([]));
    parsedClocks = [];

  } else {
    parsedClocks = JSON.parse(clocksFromStorage);
  }
  


  const [clocks, setClocks] = React.useState(parsedClocks);
  const [searchValue, setSearchValue] = React.useState("");

  const totalClocks = clocks.length;

  const searchedClocks = clocks.filter(
    (clock) => {
      const clockText = clock.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return(clockText.includes(searchText));
    }     
  );

  const saveToStorage = (newClocks) => {

    localStorage.setItem("clocks_beta", JSON.stringify(newClocks));
    setClocks(newClocks);
  };

  const deleteTodo = (text) => {
    const newClocks = [...clocks];
    const clockIndex = newClocks.findIndex(
      (clock) => clock.text === text
    );
    newClocks.splice(clockIndex, 1);
    saveToStorage(newClocks);
  }

  console.log('Search: ' + searchValue);


  return (
    <main className='main-box'>

      <section className='search-box'>

        <div className='clock-search'>

         <ClockCounter total={totalClocks}/>

          <TimeSearch
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />

          <CreateButton/>

        </div>

      </section>

      <section className='clock-box'>

        <TimeList>
          {(clocks.length === 0)
              ? (<p className='no-clocks'>Add a new clock!</p>)
              : searchedClocks.map((clock) => (
                <TimeItem
                  key= {clock.text}
                  text= {clock.text}
                  day= {clock.day}
                  onDelete = {() => deleteTodo(clock.text)}
                />
              ))}

        </TimeList>

      </section>

    </main>
  );
}

export default App;
