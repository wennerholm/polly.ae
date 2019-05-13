import React, { Component } from "react";
import classes from './Calculator.css';

import Slider from "react-input-slider";
import { Button } from "react-bootstrap";

class Calculator extends Component {
  state = {
    loanAmount: 150000,
    year: 12,
    oldLoan: 150000,
  };

  increaseYear = () => {
    var year = this.state.year;
    year++;

    if (this.state.year < 30) {
      this.setState({ year: year });
    }
  };

  _toggleLoanTypeSwitch = () => {
    let currentState = this.state.loanTypeCheck;

    if (!currentState) {
      this.setState({ loanTypeCheck: true });
      return;
    }

    this.setState({ loanTypeCheck: false });
  };

  decreaseYear = () => {
    if (this.state.year > 0) {
      var year = this.state.year;
      year--;
      this.setState({ year: year });
    }
  };

  render() {
    let switchClassesArray = [
      "d-flex",
      "align-items-center",
      "justify-content-center",
      "unset-state"
    ];

    let switchStateClass = classes.unset;

    if (this.state.loanTypeCheck) {
      switchStateClass = classes.collected;
    }
    if (this.state.loanTypeCheck === false) {
      switchStateClass = classes.new;
    }

    return (
      <div className={classes.Calculator}>
        <div className="row text-center">
          <div className="col-6">
            <small>Total loan amount</small>
            <h2>{this.state.loanAmount} SEK</h2>
          </div>
          <div className="col-6">
            <small>Loan period</small>
            <div>
              <Button
                onClick={this.decreaseYear}
                className={classes.btnRound}
              >
                <svg viewBox="0 0 24 24">
                  <path fill="#f89838" d="M19,13H5V11H19V13Z" />
                </svg>
              </Button>
              <h2 className="d-inline">{this.state.year} year</h2>
              <Button onClick={this.increaseYear}>+</Button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <span className="mr-3">10,000</span>
          <Slider
            axis="x"
            xstep={5000}
            xmin={10000}
            xmax={600000}
            x={this.state.loanAmount}
            onChange={amount => this.setState({ loanAmount: amount.x })}
            styles={{
              width: "10%",
              track: {
                backgroundColor: "blue",
                width: "100%",
                maxWidth: 400
              },
              thumb: {
                width: 30,
                height: 30
              }
            }}
          />
          <span className="ml-3">600,000</span>
        </div>

        <div className="row mt-3 text-center">
          <div className="col-12">
            <small>About monthly cost</small>
            <h3>3 027 kr</h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <div className={classes.switchContainer}>
              <div className={switchClassesArray.join(" ")}>
                <label
                  className={switchStateClass}
                  onClick={this._toggleLoanTypeSwitch}
                  style={{
                    backgroundColor:
                      this.state.loanTypeCheck != null
                        ? "#1bac5e"
                        : "#e8e7e7"
                  }}
                />
                <div className={classes.switchLabelWrap}>
                  <span
                    className={classes.newLoanSwitchLabel}
                    style={{
                      color:
                        this.state.loanTypeCheck === false
                          ? "#1bac5e"
                          : "rgba(0,0,0,0.37)"
                    }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        New loan
                      </font>
                    </font>
                  </span>
                  <span
                    className={classes.collectedLoanSwitchLabel}
                    style={{
                      color:
                        this.state.loanTypeCheck === true
                          ? "#1bac5e"
                          : "rgba(0,0,0,0.37)"
                    }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Collect loans
                      </font>
                    </font>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 text-center">
            <small>
              Of SEK 150,000, how much should go to collecting / redeeming
              loans?
            </small>
            <h2 className="mt-3">{this.state.loanAmount}</h2>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <span className="mr-3">10,000</span>
          <Slider
            axis="x"
            xstep={5000}
            xmin={10000}
            xmax={this.state.loanAmount}
            x={this.state.oldLoan}
            onChange={amount => this.setState({ oldLoan: amount.x })}
            styles={{
              width: "10%",
              track: {
                backgroundColor: "blue",
                width: "100%",
                maxWidth: 400
              },
              thumb: {
                width: 30,
                height: 30
              }
            }}
          />
          <span className="ml-3">{this.state.loanAmount}</span>
        </div>
      </div>
    );
  }
}

export default Calculator;
