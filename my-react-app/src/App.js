import React from "react";
import logo from './logo.svg';
import './App.css';
import './linkedlistVisual/linkedlistVisual.css'

import NewComponent from "./linkedlistVisual/NewComponent";
import LinkedlistVisual from "./linkedlistVisual/linkedlist";

function App() {
  return (
    <div className="App">
        <div className={'app-visual'}>
            <NewComponent/>
            <LinkedlistVisual>

            </LinkedlistVisual>
        </div>
    </div>
  );
}

export default App;
