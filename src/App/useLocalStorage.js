import React from "react";


function useLocalStorage(itemName, initialValue)  {

    let parsedItem;
    const itemsFromStorage = localStorage.getItem(itemName);
    
    if (!itemsFromStorage) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
  
    } else {
      parsedItem = JSON.parse(itemsFromStorage);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveToStorage = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveToStorage];
}

export {useLocalStorage};