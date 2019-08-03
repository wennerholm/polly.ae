import React from 'react';
import Navbar from './App/Components/Navbar/Navbar';
import HomePage from './App/Components/Pages/HomePage/HomePage';
import CarLoan from './App/Components/CarLoan/CarLoan';
import Aux from './App/hoc/Auxiliary/Auxiliary';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobile, faStroopwafel, faUser, faChevronCircleUp, faPhone, faEnvelope, faChevronUp, faBriefcase, faUserFriends, faUsers, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add([faMobile, faStroopwafel, faChevronCircleUp, faUser, faPhone, faEnvelope, faChevronUp, faBriefcase, faUserFriends, faUsers, faChevronDown, faChevronRight]);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: 'Username and password is required.',
      touched: false,
      isAuthenticated: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ touched: true });

    if(!this.state.username) {
      this.setState({ message: 'Username is required.' });
      return;
    }

    if(!this.state.password) {
      this.setState({ message: 'Password is required.' });
      return;
    }

    if (this.state.username !== 'admin' && this.state.password !== 'Betajuly2019') {
      this.setState({ message: 'Invalid credentials' });
      return;
    }

    this.setState({isAuthenticated: true});
  }

  handleChange = (e) => {
    switch (e.target.id) {
      case 'username':
        this.setState({ username: e.target.value, message: '' });
        break;
      case 'password':
        this.setState({ password: e.target.value, message: '' });
        break;
      default:
    }

  }

  render() {

    if (!this.state.isAuthenticated) {
      return (
        <div className="min-vh-100 d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 offset-md-3">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>

                      <h1>Polly</h1>
                      {this.state.touched ? (
                        <p className="text-danger">{this.state.message}</p>
                      ) : null}

                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" autoComplete="username" onChange={this.handleChange} />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="password" onChange={this.handleChange} />
                      </div>

                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
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
}

export default App;