import React, { Component } from "react";
import classes from './Calculator.css';

import Slider from "react-input-slider";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from "react-bootstrap";

class Calculator extends Component {
  state = {
    loanAmount: 150000,
    year: 12,
    oldLoan: 150000,
    errors: {},
    applicant: {},
    coApplicant: {},
    hasPartner: false,
  };

  increaseYear = () => {
    var year = this.state.year;
    year++;

    if (this.state.year < 30) {
      this.setState({ year: year });
    }
  };

  componentDidMount = () => {
    this.renderJobTemplate();
  }

  renderJobTemplate = () => {
    let date = new Date();
    let year = date.getFullYear()
    let options = [];

    let template = [];

    for (let i = 0; i < 10; i++) {
      const d = year--;
      options.push(<option value={d} key={d}>{d}</option>)

      if (i === 9) {
        options.push(<option value={d} key={d-1}>Employed since {d}</option>);
      }
    }

    options = options.reverse();

    template.push(
      <div key="company-name">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Company name" />
        </div>
        {this.state.errors.companyName ? (
          <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Enter company name</div>
        ) : null}
      </div>
    );

    template.push(
      <div key="income">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Monthly salary" />
        </div>
        {this.state.errors.income ? (
          <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Enter your income</div>
        ) : null}
      </div>
    );

    template.push(
      <div key="year">
        <select className="form-control custom-select form-control-success" placeholder="Employed since" onChange={(event) => this.setState({...this.state})} value={''}>
          {options}
        </select>
        {this.state.errors.income ? (
          <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Choose an option</div>
        ) : null}
      </div>
    );

    return template;

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
    if (this.state.year > 1) {
      var year = this.state.year;
      year--;
      this.setState({ year: year });
    }
  };

  _hasPartner = () => {
    let hasPartner = this.state.hasPartner;
    this.setState({ hasPartner: !hasPartner });
  }

  render() {
    console.log(this.state)
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
      <div className={classes.Calculator} style={{ width: this.props.style.width ? this.props.style.width : '100%', maxWidth: this.props.style.maxWidth ? this.props.style.maxWidth : '100%' }}>
        <div className={["d-flex", "align-items-center","text-center", classes.justifyContentSpaceEvenly].join(' ')}>
          <div className="col-611">
            <small style={{ color: '#9d9d9d' }}>Total loan amount</small>
            <h2 className="mb-0">AED {this.state.loanAmount}</h2>
          </div>
          <div className="col-611">
            <small style={{ color: '#9d9d9d' }}>Loan period</small>
            <div>
              <button
                onClick={this.decreaseYear}
                className={classes.btnRound}
              >
                <svg viewBox="0 0 24 24">
                  <path fill="#f89838" d="M19,13H5V11H19V13Z" />
                </svg>
              </button>
              <h2 className="d-inline font-weight-normal h4 mx-1">{this.state.year} year</h2>
              <button onClick={this.increaseYear} className={classes.btnRound}>
                <svg viewBox="0 0 24 24">
                  <path fill="#f89838" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mt-2">
          <span className="mr-3 small" style={{ color: '#9d9d9d' }}>10,000</span>
          <Slider
            axis="x"
            xstep={5000}
            xmin={10000}
            xmax={600000}
            x={this.state.loanAmount}
            onChange={amount => this.setState({ loanAmount: amount.x })}
            styles={{
              active: {
                backgroundColor: "#83db93",
              },
              track: {
                backgroundColor: "#83db93",
                height: 4,
                width: '60%',
              },
              thumb: {
                width: 30,
                height: 30,
                boxShadow: '1px 1px 3px rgba(0,0,0,0.6)'
              }
            }}
          />
          <span className="ml-3 small" style={{ color: '#9d9d9d' }}>600,000</span>
        </div>

        <div className="row mt-2 text-center">
          <div className="col-12">
            <small style={{ color: '#9d9d9d' }}>Estimated monthly cost</small>
            <h3 className="mb-0">AED {Math.floor(this.state.loanAmount / this.state.year / 12)}</h3>
          </div>
        </div>

        <div className="row mt-2">
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
                  <span style={{
                    marginRight: '33px',
                    paddingLeft: '50px',
                    color:
                      this.state.loanTypeCheck === false
                        ? "#1bac5e"
                        : "rgba(0,0,0,0.37)"
                  }}>New loan</span>
                  <span style={{
                    marginLeft: '40px',
                    color:
                      this.state.loanTypeCheck === true
                        ? "#1bac5e"
                        : "rgba(0,0,0,0.37)"
                  }}>Loan consolidation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.loanTypeCheck ? (
          <Aux>
            <div className="row justify-content-center align-items-center mt-3">
              <div className="col-12 text-center">
                <small>
                  Of AED {this.state.loanAmount}, how much should go to collecting / redeeming
                  loans?
              </small>
                <h2 className="mt-2 mb-0">{this.state.oldLoan}</h2>
              </div>
            </div>

            <div className="row justify-content-center align-items-center mt-2">
              <span className="mr-3 small" style={{ color: '#9d9d9d' }}>10,000</span>
              <Slider
                axis="x"
                xstep={5000}
                xmin={10000}
                xmax={this.state.loanAmount}
                x={this.state.oldLoan}
                onChange={amount => this.setState({ oldLoan: amount.x })}
                styles={{
                  active: {
                    backgroundColor: "#83db93",
                  },
                  track: {
                    backgroundColor: "#83db93",
                    height: 4,
                    width: '60%',
                  },
                  thumb: {
                    width: 30,
                    height: 30,
                    boxShadow: '1px 1px 3px rgba(0,0,0,0.6)'
                  }
                }}
              />
              <span className="ml-3 small" style={{ color: '#9d9d9d' }}>{this.state.loanAmount}</span>
            </div>
          </Aux>
        ) : null}

        {/* input form */}

        <div className="row mt-3">

          <div className="col-12">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white"><FontAwesomeIcon icon="user" /></span>
              </div>
              <input type="text" className="form-control" placeholder="Emirates ID number (xxx-xxxx-xxxxxxx-x)" />
            </div>
            {this.state.errors.personNumber ? (
              <div className="alert rounded-0 mb-0 bg-danger text-white py-1" ><FontAwesomeIcon icon="chevron-up" /> Emirates ID number (xxx-xxxx-xxxxxxx-x)</div>
            ) : null}

          </div>

          <div className="col-12">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white"><FontAwesomeIcon icon="phone" /></span>
              </div>
              <input type="text" className="form-control" placeholder="Mobile number (+971 5X XXXXXXX)" />
            </div>
            {this.state.errors.mobile ? (
              <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Mobile number is invalid</div>
            ) : null}
          </div>

          <div className="col-12">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white"><FontAwesomeIcon icon="envelope" /></span>
              </div>
              <input type="text" className="form-control" placeholder="Email address" />
            </div>
            {this.state.errors.email ? (
              <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Email is invalid</div>
            ) : null}
          </div>

          <div className="col-12">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white"><FontAwesomeIcon icon="briefcase" /></span>
              </div>
              <select className="form-control custom-select form-control-success" placeholder="Employment type" onChange={(event) => this.setState({ applicant: { ...this.state.applicant, job: event.target.value } })} value={this.state.applicant.job}>
                <option value="" >Type of employment</option>
                <option value="employed">Permanent employee (for the time being / trial employee)</option>
                <option value="selfemployed">Self-employed</option>
                <option value="earlyRetirement">early retirement</option>
                <option value="retired">Pensioner</option>
                <option value="temporaryEmployment">Temporary employment</option>
                <option value="hourlyEmployment">Employed by the hour</option>
              </select>
            </div>
            {this.state.errors.employementType ? (
              <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Choose employment type</div>
            ) : null}

            {(this.state.applicant.job) ? this.renderJobTemplate() : null}

          </div>

          {/* employement details */}

          <div className="col-12">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white"><FontAwesomeIcon icon="user-friends" /></span>
              </div>
              <select className="form-control custom-select form-control-success" placeholder="Relationship status" >
                <option value="" >Relationship status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
            {this.state.errors.relationshipStatus ? (
              <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Choose relationship status</div>
            ) : null}

          </div>

          <div className="col-12">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white"><FontAwesomeIcon icon="users" /></span>
              </div>
              <select className="form-control custom-select form-control-success" placeholder="Number of children (under 18)">
                <option value="-">Number of children(under 18)</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6+</option>
              </select>
            </div>
            {this.state.errors.children ? (
              <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Choose number of child</div>
            ) : null}
          </div>

          {/* checkbox */}
          <div className="col-12 mt-2">
            <label className={[classes.coApp, this.state.hasPartner ? classes.coAppOpen : ''].join(' ')} onClick={this._hasPartner}>
              <div className={classes.check}>&nbsp;</div>
              <div style={{ marginLeft: '3rem' }}>
                <b id="x-partner-label">Add co-applicants</b> <br />
                <i>Increase the chance of successful application</i>
                {/* <input className="fz-placeholder hide" id="partner-toggle" type="checkbox" name="partnerToggle" /> */}
              </div>
            </label>
          </div>

          {/* partner check form */}
          {this.state.hasPartner ? (
            <Aux>
              <div className="col-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white"><FontAwesomeIcon icon="user" /></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Emirates ID number (xxx-xxxx-xxxxxxx-x)" />
                </div>
                {this.state.errors.personNumber ? (
                  <div className="alert rounded-0 mb-0 bg-danger text-white py-1" ><FontAwesomeIcon icon="chevron-up" /> Emirates ID number (xxx-xxxx-xxxxxxx-x)</div>
                ) : null}

              </div>

              <div className="col-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white"><FontAwesomeIcon icon="phone" /></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Mobile number (+971 5X XXXXXXX)" />
                </div>
                {this.state.errors.mobile ? (
                  <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Mobile number is invalid</div>
                ) : null}
              </div>

              <div className="col-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white"><FontAwesomeIcon icon="envelope" /></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Email address" />
                </div>
                {this.state.errors.email ? (
                  <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Email is invalid</div>
                ) : null}
              </div>

              <div className="col-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white"><FontAwesomeIcon icon="briefcase" /></span>
                  </div>
                  <select className="form-control custom-select form-control-success" placeholder="Employment type" onChange={(event) => this.setState({ applicant: { ...this.state.applicant, job: event.target.value } })} value={this.state.applicant.job}>
                    <option value="" >Type of employment</option>
                    <option value="employed">Permanent employee (for the time being / trial employee)</option>
                    <option value="selfemployed">Self-employed</option>
                    <option value="earlyRetirement">early retirement</option>
                    <option value="retired">Pensioner</option>
                    <option value="temporaryEmployment">Temporary employment</option>
                    <option value="hourlyEmployment">Employed by the hour</option>
                  </select>
                </div>
                {this.state.errors.employementType ? (
                  <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Choose employment type</div>
                ) : null}

                {(this.state.applicant.job) ? this.renderJobTemplate() : null}

              </div>

              {/* employement details */}

              <div className="col-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white"><FontAwesomeIcon icon="user-friends" /></span>
                  </div>
                  <select className="form-control custom-select form-control-success" placeholder="Relationship status" >
                    <option value="" >Relationship status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>
                {this.state.errors.relationshipStatus ? (
                  <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Choose relationship status</div>
                ) : null}

              </div>

              <div className="col-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white"><FontAwesomeIcon icon="users" /></span>
                  </div>
                  <select className="form-control custom-select form-control-success" placeholder="Number of children (under 18)">
                    <option value="-">Number of children(under 18)</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6+</option>
                  </select>
                </div>
                {this.state.errors.children ? (
                  <div className="alert rounded-0 mb-0 bg-danger text-white py-1"><FontAwesomeIcon icon="chevron-up" /> Choose number of child</div>
                ) : null}
              </div>

            </Aux>
          ) : null}

        </div>


        <div className="row">
          <div className="col-12 mt-3  text-center">
            <small className="text-muted d-block mb-2" style={{ fontSize: '10px' }}>By submitting the application you accept our <u>user agreement</u> and <u>data protection policynpm </u>.</small>

            <button className={["btn", "btn-lg", "btn-block", "my-3", classes.buttonCalculator].join(' ')}>Get Your Quotes Now - It's Free!</button>

          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;
