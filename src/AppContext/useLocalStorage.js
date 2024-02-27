import React from "react";


function useLocalStorage(itemName, initialValue)  {

  const [item, setItem] = React.useState(initialValue);
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

    return {
      item,
      saveToStorage,
      loading,
      error
    };
}

export {useLocalStorage};