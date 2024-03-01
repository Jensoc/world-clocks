import React from 'react';
import { TimeSearch } from '../TimeSearch';
import { TimeList } from '../TimeList';
import { TimeItem } from '../TimeItem';
import { CreateButton } from '../CreateButton';
import { ClockCounter } from '../ClockCounter';
import { Loader } from '../Loader';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Modal } from '../Modal';
import { AppContext } from '../AppContext';
import { Dropdown } from '../Dropdown';
import { DropdownContent } from '../DropdownContent';

function AppUI() {

  const {
    error,
    clocks,
    loading,
    deleteClock,
    searchedClocks,
    dropdown,
  } = React.useContext(AppContext);

    return (
        <main className='main-box'>
          <section className='search-box'>
            <div className='clock-search'>

              <ClockCounter/>
              <TimeSearch/>
              <CreateButton/>

              <Modal>
                <Dropdown/>
                {dropdown && <DropdownContent/>}
              </Modal>

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
                          key = {clock.city}
                          city = {clock.city}
                          time = {clock.time}
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