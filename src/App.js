import React from 'react';
import Navbar from './App/Components/Navbar/Navbar';
import Calculator from "./App/Components/Calculator/Calculator";
import CarLoan from './App/Components/CarLoan/CarLoan';
import Aux from './App/hoc/Auxiliary/Auxiliary';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Aux>
        <Navbar />
        <Route exact path="/" component={Calculator} />
        <Route path="/car-loan" component={CarLoan} />
      </Aux>
    </Router>
    // <Aux>
    //   <Navbar/>
    //   <Calculator />
    // </Aux>
  );
}

export default App;
