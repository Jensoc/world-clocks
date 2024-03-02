import React, { useState } from "react";

// 

function useLocalStorage(itemName, initialValue)  {

  const [item, setItem] = React.useState(initialValue);
  const [timezoneClockList, setTimezoneClockList] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    React.useEffect(() => {
        try {
          const itemsFromStorage = localStorage.getItem(itemName);
          let parsedItem;
    
          if (!itemsFromStorage) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        
          } else {
            parsedItem = JSON.parse(itemsFromStorage);
            setItem(parsedItem); 
          }
    
          setLoading(false);
        } catch(error) {
          setError(true);
          setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveToStorage = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };

    const saveToTimezoneStorage = (newItem) => {
      localStorage.setItem("timezone_v1", JSON.stringify(newItem));
      setTimezoneClockList(newItem);
    };

    return {
      item,
      saveToStorage,
      timezoneClockList,
      saveToTimezoneStorage,
      loading,
      error
    };
}

export {useLocalStorage};