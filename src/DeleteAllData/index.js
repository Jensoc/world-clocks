import React from 'react';

function DeleteAllData() {

    const deleteAllData = ()=> {
        localStorage.removeItem("clocks_v1"); localStorage.removeItem("id_counter"); localStorage.removeItem("timezone_v1");
        window.location.reload();
    }

  return (
    <button onClick={deleteAllData}>Delete All Data</button>
  )
}

export {DeleteAllData};