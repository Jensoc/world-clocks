import React from 'react';
import { TimeSearch } from '../TimeSearch';
import { TimeList } from '../TimeList';
import { TimeItem } from '../TimeItem';
import { CreateButton } from '../CreateButton';
import { ClockCounter } from '../ClockCounter';
import { Loader } from '../Loader';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { AppContext } from '../AppContext';


function AppUI() {

  const {
    error,
    clocks,
    loading,
    deleteClock,
    searchedClocks,
  } = React.useContext(AppContext);

    return (
        <main className='main-box'>
          <section className='search-box'>
            <div className='clock-search'>

              
              <ClockCounter/>
              <TimeSearch/>
              <CreateButton/>

            </div>
          </section>
    
          <section className='clock-box'>
    
                <TimeList>
                  {loading && <Loader/>}
                  {error && <li className='no-clocks'>Error!</li>}

                  {(clocks.length === 0)
                      ? ((!loading && !error) && <li className='no-clocks'>Add a new clock!</li>)
                      
                      : searchedClocks.map((clock) => (
                          <TimeItem
                            onDelete = {() => deleteClock(clock.text)}
                            key = {clock.text}
                            text = {clock.text}
                            day = {(clock.day) ? <FaSun color='#FFC73A'/> : <FaMoon color='#674689'/>}
                          />
                        ))
                  }
                </TimeList>
    
          </section>
        </main>
      );
}

export {AppUI};