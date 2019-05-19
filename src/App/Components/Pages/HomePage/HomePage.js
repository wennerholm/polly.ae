import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './HomePage.css';
import Redline from '../../Redline/Redline';
import Calculator from '../../Calculator/Calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-multi-carousel';

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
        <header className={classes.hero}>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-5">
                <div>
                  <h1 className="h2">Compare loans up till AED600,000</h1>
                  <b style={{ color: '#dc1f5b' }}>Polly is free and only one credit report request is made</b>

                  <p>Since 2019 Polly has helped thousands of consumers to obtain personal loans with low interest rate.</p>

                  <p>
                    By negotiating with the banks on your behalf we will compile quotes from over 15 banks in United Arab Emirates to find the lowest possible rate. Submit an application today and get your quotes!
                  </p>
                </div>
              </div>

              <div className="col-md-7 justify-content-end d-flex">
                <Calculator style={{ width: '100%', maxWidth: '500px' }} />
              </div>
            </div>
          </div>
        </header>

          <section className="py-5 mt-5">
          <div className="container">
          <div className="row">
              <div className="col-md-6">
                <div className={classes.creditWidthDiv}>
                  <img src={require('../../../../assets/credit.jpg')} alt="Ikano" title="Ikano Bank" />
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h4 >Credit Score</h4>
                <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>  
            </div>
          </div>
          </div>
          </section>


        <section className="steps py-5  mb-5">
          <div className="container">

            <div className="d-flex justify-content-center align-items-center text-center" style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank1.jpeg')} alt="Ikano" title="Ikano Bank" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank2.jpg')} alt="Swedbank" title="Swedbank" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank3.jpg')} alt="Resurs bank" title="Resurs Bank" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank4.jpg')} alt="Ica banken" title="ICA Banken" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank5.jpg')} alt="Coop MedMera bank" title="Coop MedMera Bank" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/bank6.jpg')} alt="Santander" title="Santander Consumer Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank7.jpg')} alt="Forex bank" title="Forex Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank8.png')} alt="Wasa kredit" title="Wasa Kredit" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank9.png')} alt="Lendify" title="Lendify" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank10.jpg')} alt="Komplett" title="Komplett" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank11.jpg')} alt="Spring Finance/Bluestep" title="Spring Finance/Bluestep" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank12.jpg')} alt="Marginalen bank" title="Marginalen Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bank13.jpg')} alt="Sevenday finans" title="Sevenday Finans" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 justify-content-center d-flex">
                <button className="btn btn-outline-dark mt-2 rounded-pill" onClick={() => {
                  let status = this.state.moreBanks;
                  this.setState({ moreBanks: !status });
                }}>Show all {this.state.moreBanks ? <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}</button>
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
                <h2 className="text-white h4 font-weight-bold">When you take a loan, it is clear that you want to get the best possible interest rate.</h2>
                <p className="text-light mb-0">Polly offers a fast, free and safe solution for those who want to borrow money . What you are going to use the money for is up to you. By comparing personal loans with over 15 banks at the same time, we help you find the loan with the best terms and the lowest interest rate.</p>
              </div>
            </div>
          </div>
        </section>

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
                  <p className="text-center">Complete your application online. It takes no more than 2 minutes and is <b>completely free!</b>.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={classes.stepTrust}>
                  <img src={require('../../../../assets/steps/step-3.svg')} alt="step 2" />
                  <p className={['text-center', classes.strong].join(' ')}>The bank share their quotes</p>
                  <p className="text-center">Poly compiles <b>quotes from over 15 banks</b>. You will receive your first quote usually within one hour.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={classes.stepTrust}>
                  <img src={require('../../../../assets/steps/step-4.svg')} alt="step 3" />
                  <p className={['text-center', classes.strong].join(' ')}>You decide which bank to proceed with</p>
                  <p className="text-center">Once you have reviewed the <b>best quotes</b>, you decide whether or not to proceed with a loan.
                  Don't worry there are no fees regardless of your decision.</p>
                </div>
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
                    }}>Is only one credit report search done?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.one ? 'block' : 'none' }}>
                      <p>Yes! Although you get up to 30 different loan offers, only one credit report is made. However, all lenders who have taken it from your information must send a separate inquiry copy. In some cases, some banks may include additional information in addition to the information provided by UC to improve the quality of the credit decision.</p>
                      <p>In order to maximize the chance of good loan terms, we also recommend that you include a co-applicant in your comparison. This is often a great advantage when the banks make their assessment.</p>
                    </div>
                  </div>

                </div>

                <hr />

                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.two ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.two;

                      this.setState({ questions: { ...this.state.questions, two: !status } })
                    }}>Am I eligible for a loan?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.two ? 'block' : 'none' }}>
                      <p>Yes! Although you get up to 30 different loan offers, only one credit report is made. However, all lenders who have taken it from your information must send a separate inquiry copy. In some cases, some banks may include additional information in addition to the information provided by UC to improve the quality of the credit decision.</p>
                      <p>In order to maximize the chance of good loan terms, we also recommend that you include a co-applicant in your comparison. This is often a great advantage when the banks make their assessment.</p>
                    </div>
                  </div>

                </div>

                <hr />



              </div>

              <div className="col-md-6">
                <hr />
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.three ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.three;

                      this.setState({ questions: { ...this.state.questions, three: !status } })
                    }}>How quickly can I receive the quotes from the banks?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.three ? 'block' : 'none' }}>
                      <p>Yes! Although you get up to 30 different loan offers, only one credit report is made. However, all lenders who have taken it from your information must send a separate inquiry copy. In some cases, some banks may include additional information in addition to the information provided by UC to improve the quality of the credit decision.</p>
                      <p>In order to maximize the chance of good loan terms, we also recommend that you include a co-applicant in your comparison. This is often a great advantage when the banks make their assessment.</p>
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
                      <p>Yes! Although you get up to 30 different loan offers, only one credit report is made. However, all lenders who have taken it from your information must send a separate inquiry copy. In some cases, some banks may include additional information in addition to the information provided by UC to improve the quality of the credit decision.</p>
                      <p>In order to maximize the chance of good loan terms, we also recommend that you include a co-applicant in your comparison. This is often a great advantage when the banks make their assessment.</p>
                    </div>
                  </div>

                </div>

                <hr />



              </div>


            </div>

            <div className="row">
              <div className="col-12 justify-content-center d-flex">
                <button className="btn btn-outline-dark btn-lg mt-5 rounded-pill">View more questions <FontAwesomeIcon icon="chevron-right" /></button>
              </div>
            </div>

          </div>
        </section>

        <footer className={['py-5', 'bg-dark', classes.footer].join(' ')}>
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-12">
                <ul className="list-unstyled">
                  <li><a href="/">Home</a></li>
                  <li><a href="">Loan consolidation</a></li>
                  <li><a href="">Borrow money</a></li>
                  <li><a href="">Car loan</a></li>
                  <li><a href="">Insurance</a></li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-12">
                <ul className="list-unstyled">
                  <li><a href="">About us</a></li>
                  <li><a href="">Questions and answers</a></li>
                  <li><a href="">Contact Us</a></li>
                  <li><a href="">Polly explains</a></li>
                  <li><a id="complaintLink" href="">If you are not satisfied</a></li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-12">
                <ul className="list-unstyled">
                  <li><a target="blank_" href="">Data Protection Policy &amp; Cookies</a></li>
                  <li><a target="blank_" href="">User Agreement</a></li>
                  <li><a href="">Work with us</a></li>
                  <li><a href="">Press</a></li>
                  <li><a href="">Sitemap</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Aux>
    )
  }
}