import React from 'react';
import Navbar from './App/Components/Navbar/Navbar';
import HomePage from './App/Components/Pages/HomePage/HomePage';
import CarLoan from './App/Components/CarLoan/CarLoan';
import Aux from './App/hoc/Auxiliary/Auxiliary';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faUser, faChevronCircleUp, faPhone, faEnvelope, faChevronUp, faBriefcase, faUserFriends, faUsers, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add([faStroopwafel, faChevronCircleUp, faUser, faPhone, faEnvelope, faChevronUp, faBriefcase, faUserFriends, faUsers, faChevronDown, faChevronRight ]);

function App() {
  return (
    <Router>
      <Aux>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/car-loan" component={CarLoan} />
      </Aux>
    </Router>
  );
}

export default App;
