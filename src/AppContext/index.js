import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useFetchDefaultClocks } from "./useFetchDefaultClocks";

const AppContext = React.createContext();


function AppProvider({children}) {
  
  const [dropdown, setDropdown] = React.useState(false);

    const {
        item: clocks,
        saveToStorage,
        loading,
        error,
      } = useLocalStorage("clocks_v1", useFetchDefaultClocks() && []);

      console.log(useFetchDefaultClocks());

      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);

      const clocksCount = clocks.length;

      const searchedClocks = clocks && clocks.filter(
        (item) => {
          
          const clockText = item.city.toLocaleLowerCase();
          const searchText = searchValue.toLocaleLowerCase();
          return(clockText.includes(searchText));
        }     
      );

      // const searchedClocks = [];
      // for (const item of clocks) {
      //   const clockText = item.text.toLocaleLowerCase();
      //   const searchText = searchValue.toLocaleLowerCase();

      //   if (clockText.includes(searchText)) {
      //     searchedClocks.push(item);
      //   }
      // }
    
    
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