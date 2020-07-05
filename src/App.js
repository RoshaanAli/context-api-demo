import React, { useState, useReducer } from 'react';
import './App.css';
import Parent from "./Parent";
import ValueContext from './ValueContext';

function App() {
  // let [number, setnumber] = useState(10);

  let value = useState(10);

  return (
    <ValueContext.Provider value={value}>
      <div className="App">
        hello world..............!
      <Parent />

        {/* <button onClick={() => setnumber(++number)}>Update number</button> */}

      </div>
    </ValueContext.Provider>
  );
}

export default App;
