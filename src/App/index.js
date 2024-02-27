import React from 'react';
import { TimeSearch } from '../TimeSearch';
import { TimeList } from '../TimeList';
import { TimeItem } from '../TimeItem';
import { CreateButton } from '../CreateButton';
import { ClockCounter } from '../ClockCounter';
import { useLocalStorage } from './useLocalStorage';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import './App.css';

// const defaultClocks = [
//   { text: "Paris", day: true },
//   { text: "New York", day: true },
//   { text: "Caracas", day: true },
//   { text: "Tokyo", day: false },
//   { text: "Amsterdam", day: false }
// ];

// localStorage.setItem("clocks_beta", JSON.stringify(defaultClocks));
// localStorage.removeItem("clocks_beta");

function App() {

  const [clocks, saveToStorage] = useLocalStorage("clocks_v1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const clocksCount = clocks.length;

  const searchedClocks = clocks.filter(
    (clock) => {
      const clockText = clock.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return(clockText.includes(searchText));
    }     
  );

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

         <ClockCounter total={clocksCount}/>

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
                  day= {(clock.day) ? <FaSun color='#FFC73A'/> : <FaMoon color='#42536D'/>}
                  onDelete = {() => deleteTodo(clock.text)}
                />
              ))}

        </TimeList>

      </section>

    </main>
  );
}

export default App;
