import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const AppContext = React.createContext();

function AppProvider({children}) {
  
  const [dropdown, setDropdown] = React.useState(false);
  const [id, setId] = useState(localStorage.getItem("id_counter") || 0);
  localStorage.setItem("id_counter", id);

  const {
    item: clocks,
    timezoneClockList,
    saveToStorage,
    saveToTimezoneStorage,
    loading,
    error,
    } = useLocalStorage("clocks_v1", []);

    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    const clocksCount = clocks.length;

    const searchedClocks = clocks && clocks.filter(
      (item) => {
        const clockText = item?.city?.toLocaleLowerCase();
        const searchText = searchValue?.toLocaleLowerCase();
        return(clockText?.includes(searchText));
      }     
    );

    const addClock = (time, city) => {
      let key = id;
      key++;
      setId(key);
      let day;
      const newClocks = [...clocks];
      newClocks.push({time, city, day, key});
      saveToStorage(newClocks);
    }
  
    const deleteClock = (x) => {
      const newClocks = [...clocks];
      const index = newClocks.findIndex((clock) => clock.key === x);
    
      if (index !== -1) {
        newClocks.splice(index, 1);
        saveToStorage(newClocks);
      }
    };

    const addTimezoneClock = (timezone) => {
      setTimeout(() => {
          const newTimezoneClocks = [...timezoneClockList];
          newTimezoneClocks.push(timezone);
          saveToTimezoneStorage(newTimezoneClocks);
      }, 500);
    }

  return(
      <AppContext.Provider value ={{
        error,
        clocks,
        loading,
        deleteClock,
        clocksCount,
        searchValue,
        setSearchValue,
        searchedClocks,
        setOpenModal,
        openModal,
        dropdown,
        setDropdown,
        addClock,
        addTimezoneClock
      }}>
          {children}
      </AppContext.Provider>
  );
}

export {AppContext, AppProvider};