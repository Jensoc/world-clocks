import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const AppContext = React.createContext();

function AppProvider({children}) {

    const [dropdown, setDropdown] = React.useState(false);

    const {
        item: clocks,
        saveToStorage,
        loading,
        error,
      } = useLocalStorage("clocks_v1", []);
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);

      const clocksCount = clocks.length;
    
      const searchedClocks = clocks.filter(
        (clock) => {
          const clockText = clock.text.toLocaleLowerCase();
          const searchText = searchValue.toLocaleLowerCase();
          return(clockText.includes(searchText));
        }     
      );
    
      const deleteClock = (text) => {
        const newClocks = [...clocks];
        const clockIndex = newClocks.findIndex(
          (clock) => clock.text === text
        );
        newClocks.splice(clockIndex, 1);
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
            setDropdown
        }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};