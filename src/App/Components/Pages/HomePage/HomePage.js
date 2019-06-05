import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './HomePage.css';
import Redline from '../../Redline/Redline';
import Calculator from '../../Calculator/Calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Carousel from 'react-multi-carousel';

export default class HomePage extends React.Component {

  state = {
    moreBanks: false,
    questions: {
      one: false,
      two: false,
      three: false,
      four: false
    }
  }
  render() {
    return (
      <Aux>
        <header className={[classes.hero, classes.paddingtopxl].join(' ')}>
          <div className={classes.flexyRow}>

            <div className={[classes.flex, 'd-none', 'd-xl-flex'].join(' ')}></div>

            {/* <div className={classes.flexyRow}> */}
              <div className={[classes.flex, classes.x3, classes.mainStage, 'mt-5'].join(' ')}>
                <div className={classes.flexyRow}>
                  <div className={classes.flex}>
                    <div className={classes.flexyRow}>
                    <div className="d-none d-lg-block" style={{ maxWidth: '40%', }}>
                      <h1 className="h2" style={{ fontSize: '45px' }}>Compare loans up till AED600,000</h1>
                        <b style={{ color: '#dc1f5b', fontSize: '20px' }}>Polly is free and only one credit report request is made</b>

                        <p>Since 2019 Polly has helped thousands of consumers to obtain personal loans with low interest rate.</p>

                        <p>
                          By negotiating with the banks on your behalf we will compile quotes from over 15 banks in United Arab Emirates to find the lowest possible rate. Submit an application today and get your quotes!
                      </p>
                      </div>

                    <div className="d-lg-none text-center pt-3">
                      <h1 className="h2">Compare loans up till AED600,000</h1>
                        <b style={{ color: '#dc1f5b', fontSize: '20px' }}>Free and only one credit report</b>

                        <p>Since 2019 Polly has helped thousands of consumers to obtain personal loans with low interest rate.</p>

                        <ul className={classes.checklist}>
                          <li>Loans up to AED 600,000</li>
                          <li>Response from 15 banks</li>
                          <li>Apply in 2 minutes</li>
                        </ul>
                      </div>

                      <Calculator style={{ width: '100%', maxWidth: '100%', }} />

                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}

            <div className={[classes.flex, 'd-none', 'd-xl-flex'].join(' ')}></div>
          </div>
        </header>

        <section className="py-5 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center p-0">How It Works</h2>
                <Redline />
              </div>
            </div>

            <div className="row mt-2">

              <div className="col-md-4">
                <div className={classes.stepTrust}>
                  <img src={require('../../../../assets/steps/step-1.svg')} alt="step 1" />
                  <p className={['text-center', classes.strong].join(' ')}>Start comparing</p>
                  <p className="text-center">Complete your application online. It takes no more than 2 minutes and is <b>completely free!</b></p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={classes.stepTrust}>
                  <img src={require('../../../../assets/steps/step-3.svg')} alt="step 2" />
                  <p className={['text-center', classes.strong].join(' ')}>The bank share their quotes</p>
                  <p className="text-center">Polly collect <b>quotes from over 15 banks</b>. You will receive your first quote usually within one hour.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={classes.stepTrust}>
                  <img src={require('../../../../assets/steps/step-4.svg')} alt="step 3" />
                  <p className={['text-center', classes.strong].join(' ')}>You choose the bank</p>
                  <p className="text-center">Once you have reviewed the <b>best quotes</b>, you decide whether or not to proceed with a loan.
                  Don't worry there are no fees regardless of your decision.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

       


        <section className="steps py-5  mb-5">
          <div className="container">

            <div className="d-flex justify-content-center align-items-center text-center" style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank1.jpeg')} alt="bank img"/>
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank2.jpg')} alt="bank img" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank3.jpg')} alt="bank img" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank4.jpg')} alt="bank img" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank5.jpg')} alt="bank img" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank6.jpg')}  alt="bank img"/>
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank7.jpg')}  alt="bank img"/>
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank8.png')} alt="bank img"/>
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank9.png')} alt="bank img"/>
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank10.jpg')}  alt="bank img"/>
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank11.jpg')} alt="bank img" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank12.jpg')} alt="bank img" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank13.jpg')}  alt="bank img"/>
              </div>
            </div>

            <div className="row">
              <div className="col-12 justify-content-center d-flex">
                <button className={['btn', 'btn-outline-dark', 'mt-2', 'font-weight-bold', 'rounded-pill', classes.buttonBorder].join(' ')} onClick={() => {
                  let status = this.state.moreBanks;
                  this.setState({ moreBanks: !status });
                }}>Show all {this.state.moreBanks ? <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon className={[classes.arrowColor].join(' ')} icon="chevron-down" />}</button>
              </div>
            </div>

          </div>
        </section>

        {/* <section className="py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
              </div>
            </div>
          </div>
        </section> */}

        {/* Carousel here */}



        <section className="py-5" style={{ backgroundColor: '#FF3926' }}>
          <div className="container">
            <div className="row text-center py-5">
              <div className="col-12">
                <h2 className="text-white h4 font-weight-bold">If you are in the market for a Personal Loan, always ensure you compare the banks offering before deciding.</h2>
                <p className="text-light mb-0">Polly offers a fast, free and safe solution for those who want to borrow money . What you are going to use the money for is up to you. By comparing personal loans with over 15 banks at the same time, we help you find the loan with the best terms and the lowest interest rate.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={classes.creditWidthDiv}>
                  <img src={require('../../../../assets/cibil-score.png')} alt="img" />
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5><b>What is the Credit Score?</b></h5>
                <p>Credit Score is a three-digit number that predicts how likely you are to make your loan and credit card payments on time, the score ranges from 300 to 900. A low score indicates a higher risk, whereas a higher score indicates a lower risk.</p>
                <h5 className="pt-3"><b>How is the Credit Score calculated?</b></h5>
                <p>Your Credit Score is dynamic, and correspond to factors such as missed or delayed credit card payments, utilization of your credit card limits, or if you are taking on additional loans or credit cards.</p>
              </div>
            </div>
          </div>
        </section>

        <hr></hr>

        <section className="qna py-5 mt-5">
          <div className="container">

            <div className="row">
              <div className="col-12">
                <h2 className="text-center p-0">Questions and answers</h2>
                <Redline />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <hr />
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.one ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.one;

                      this.setState({ questions: { ...this.state.questions, one: !status } })
                    }}>What are the requirements to borrow via Polly?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.one ? 'block' : 'none' }}>
                      <ul> <li>You must above 21 years of age</li>
                        <li>Have a minimum monthly salary of AED3,000</li>
                        <li>Hold a valid UAE residence Visa & Emirates ID</li>
                        <li>Salary transfer may be required</li>
                        </ul>
                    </div>
                  </div>

                </div>

                <hr />

                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.two ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.two;

                      this.setState({ questions: { ...this.state.questions, two: !status } })
                    }}>Is only one credit report search done?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.two ? 'block' : 'none' }}>
                      <p>Yes! Even though you will potentially receive quotes from up to 30 banks, only one request is made for your Credit Report from Al Etihad Credit Bureau. Banks may require further information in regards to your application to ensure a well-informed credit assessment.</p>
                      <p>To maximise the chances to submit a successful application we recommend to add an co-applicant, as this drastically enhances your credit profile which not only makes you more eligible for a loan, but can also reduce your interest rate!</p>
                      </div>
                  </div>

                </div>

                <hr />



              </div>

              <div className="col-md-6">
                <hr className="d-none d-lg-block" />
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.three ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.three;

                      this.setState({ questions: { ...this.state.questions, three: !status } })
                    }}>How quickly can I receive the quotes from the banks?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.three ? 'block' : 'none' }}>
                      <p>Normally you will receive your first quote within one hour and you should expect feedback from all banks within 24h. This may vary during public holidays.</p>
                    </div>
                  </div>

                </div>

                <hr />

                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.four ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.four;

                      this.setState({ questions: { ...this.state.questions, four: !status } })
                    }}>How can Polly be a free service?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.four ? 'block' : 'none' }}>
                      <p>Polly receives commission from the bank that you choose to be your loan provider. There are no surcharges such as increased interest rate or other fees when you are using Polly. Essentially we are acting as a marketplace for banks and they pay commission if a successful loan applicant is found via Polly, just like they would spend money on any advertising platform.</p>
                    </div>
                  </div>

                </div>

                <hr />



              </div>


            </div>

            <div className="row">
              <div className="col-12 justify-content-center d-flex">
                <button className={['btn', 'btn-outline-dark', 'font-weight-bold', 'mt-2', 'rounded-pill', classes.buttonBorder].join(' ')}>View more questions <FontAwesomeIcon className={[classes.arrowColor].join(' ')} icon="chevron-right" /></button>
              </div>
            </div>

          </div>
        </section>

        <footer className={['py-5', 'bg-dark', classes.footer].join(' ')}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <ul className="list-unstyled">
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Loan consolidation</a></li>
                  <li><a href="/">Borrow money</a></li>
                  <li><a href="/">Car loan</a></li>
                  <li><a href="/">Insurance</a></li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12">
                <ul className="list-unstyled">
                  <li><a href="/">About us</a></li>
                  <li><a href="/">Questions and answers</a></li>
                  <li><a href="/">Contact Us</a></li>
                  <li><a href="/">Polly explains</a></li>
                  <li><a href="/" id="complaintLink" >If you are not satisfied</a></li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12">
                <ul className="list-unstyled">
                  <li><a href="/" target="blank_" >Data Protection Policy &amp; Cookies</a></li>
                  <li><a href="/" target="blank_" >User Agreement</a></li>
                  <li><a href="/">Work with us</a></li>
                  <li><a href="/">Press</a></li>
                  <li><a href="/">Sitemap</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Aux>
    )
  }
}