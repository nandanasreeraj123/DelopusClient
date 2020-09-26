import React from 'react';
import './App.css';
import Oranges from './Components/part2/orange';
import Levelup from './Components/part2/level';
import {Router} from '@reach/router';
import Finding from './Components/Part3/white';
import Abouts from './Components/Part3/abt';

function App() {
  return (
    <div>
      <Router>
        <Orangepage path='/orange'></Orangepage>
        <Levels path="/level"></Levels>
        <Finds path='/find'></Finds>
        <Abts path='/about'></Abts>
        
      </Router>
    </div>
  );
  function Orangepage(){
    return <Oranges></Oranges>
  }
  function Levels(){
    return <Levelup></Levelup>
  }
  function Finds(){
    return <Finding></Finding>
  }
  function Abts(){
    return <Abouts></Abouts>
  }
}

export default App;
