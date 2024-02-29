import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { AppProvider } from '../AppContext';



function App() {

  // console.log(`
  //   const defaultClocks = [
  //     { text: "Paris", day: true },
  //     { text: "New York", day: true },
  //     { text: "Caracas", day: true },
  //     { text: "Tokyo", day: false },
  //     { text: "Amsterdam", day: false }
  //   ];
    
  //   localStorage.setItem("clocks_v1", JSON.stringify(defaultClocks));`
  // )

  return(
    <AppProvider>
      <AppUI/>
    </AppProvider>
  );
  
}

export default App;
