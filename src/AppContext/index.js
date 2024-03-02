import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useUpdateClocks } from "./useUpdateClocks";
import { useFetch } from "../DropdownContent/useFetch";

const AppContext = React.createContext();

function AppProvider({children}) {
  
  const [dropdown, setDropdown] = React.useState(false);
  const [id, setId] = useState(0);

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
    localStorage.setItem("id_counter", id);

    const searchedClocks = clocks && clocks.filter(
      (item) => {
        const clockText = item?.city?.toLocaleLowerCase();
        const searchText = searchValue?.toLocaleLowerCase();
        return(clockText?.includes(searchText));
      }     
    );

    const addClock = (time, city) => {
      let key = id + 1;
      setId(id + 1);
      let day;
      const formattedTime = parseInt(time.replace(":", ""));
      (formattedTime > 600 && formattedTime < 2000) ? day = true : day = false;
      const newClocks = [...clocks];
      newClocks.push({time, city, day, key});
      saveToStorage(newClocks);
      console.log(`Al recibir: "${time}", "${city}", "${key}"`);
    }
  
    const deleteClock = (x) => {
      const newClocks = [...clocks];
      newClocks.splice(newClocks.x, 1);
      console.log(newClocks.x);
      saveToStorage(newClocks);
    }

    const addTimezoneClock = (timezone) => {
      setTimeout(() => {
          const newTimezoneClocks = [...timezoneClockList];
          newTimezoneClocks.push(timezone);
          saveToTimezoneStorage(newTimezoneClocks);
          console.log("addTimezoneClock:", timezone);
      }, 500);
    }

    const updateClocks = () => {

      const timezones = JSON.parse(localStorage.getItem("timezone_v1"));

      for (let i in clocks) {
        let updatingItem = timezones[i];
        console.log(updatingItem)

      }
    }

    // setInterval(() => {
    //   updateClocks();
    // }, 1000);

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