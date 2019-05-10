import React, { Component } from "react";
import classes from './Calculator.css';

import Slider from "react-input-slider";
import { Button } from "react-bootstrap";

class Calculator extends Component {
  state = {
    x: 250000,
    year: 12
  };

  increaseYear = () => {
    var year = this.state.year;
    year++;

    if (this.state.year < 30) {
      this.setState({ year: year });
    }
  };

  decreaseYear = () => {
    if (this.state.year > 0) {
      var year = this.state.year;
      year--;
      this.setState({ year: year });
    }
  };

  render() {

    return (
      <div className={classes.Calculator}>
        <div className="row text-center">
          <div className="col-6">
            <small>Total loan amount</small>
            <h2>{this.state.x} SEK</h2>
          </div>
          <div className="col-6">
            <small>Loan period</small>
            <div>
              <Button onClick={this.decreaseYear}>-</Button>
              <h2 className="d-inline">{this.state.year} year</h2>
              <Button onClick={this.increaseYear}>+</Button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <span className="mr-3">10,000</span>
          {/* <input type="range" class="custom-range" id="customRange1"/> */}
          <Slider
            axis="x"
            xstep={5000}
            xmin={10000}
            xmax={600000}
            x={this.state.x}
            onChange={({ x }) => this.setState(state => ({ ...state, x }))}
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
            <div className="custom-control custom-switch">
              <label>New loan</label>
              <input type="checkbox" className="custom-control-input" />
              <label className="custom-control-label" />

              <label>Collected loan</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
