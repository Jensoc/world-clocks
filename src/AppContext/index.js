import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
// import { useFetchDefaultClocks } from "./useFetchDefaultClocks";

const AppContext = React.createContext();


function AppProvider({children}) {
  
  const [dropdown, setDropdown] = React.useState(false);
  const [id, setId] = useState(0);
  const [timezoneClockList, setTimezoneClockList] = useState([]);

    const {
        item: clocks,
        saveToStorage,
        loading,
        error,
      } = useLocalStorage("clocks_v1", []);

      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);
      
      setInterval(() => {
        console.log("hola")
      }, 1000);

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
    
      const deleteClock = (id) => {
        const newClocks = [...clocks];
        newClocks.splice(newClocks.id, 1);
        console.log(newClocks.id);
        saveToStorage(newClocks);
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
            addClock
        }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};