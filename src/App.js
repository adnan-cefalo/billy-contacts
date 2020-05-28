import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <Contacts />
    </Router>
  );
}

export default App;
