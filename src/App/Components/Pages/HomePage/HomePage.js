import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './HomePage.css';
import Redline from '../../Redline/Redline';
import Calculator from '../../Calculator/Calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                  <h1 className="h2">Jämför lån upp till 600.000 kr</h1>
                  <b style={{ color: '#dc1f5b' }}>Gratis och endast en kreditupplysning</b>

                  <p>Sedan starten 2014 har vi hjälpt
                    över 280 000 nöjda kunder att
                    låna med låg ränta.</p>

                  <p>
                    Vi hjälper dig att kostnadsfritt
                    jämföra 30 olika banker och få
                    lägsta möjliga räntan.
                    Ansök och få besked idag!
                  </p>
                </div>
              </div>

              <div className="col-md-7 justify-content-end d-flex">
                <Calculator style={{ width: '100%', maxWidth: '500px' }} />
              </div>
            </div>
          </div>
        </header>

        <section className="steps py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center p-0">Så fungerar tjänsten</h2>
                <Redline />
              </div>
            </div>

            <div className="row mt-2">

              <div className="col-md-4">
                <div className={classes.stepTrust}>
                  <img src={require('../../../../assets/steps/step-1.svg')} alt="step 1" />
                  <p className={['text-center', classes.strong].join(' ')}>Börja jämför</p>
                  <p className="text-center">Fyll i din ansökan. Det tar runt 2 minuter och är <b>helt kostnadsfritt</b>.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={classes.stepTrust}>
                  <img src={require('../../../../assets/steps/step-3.svg')} alt="step 2" />
                  <p className={['text-center', classes.strong].join(' ')}>Bankerna budar</p>
                  <p className="text-center">Sambla sammanställer <b>låneförslag från över 30 långivare</b>. Första svaret har du oftast inom ett par minuter.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={classes.stepTrust}>
                  <img src={require('../../../../assets/steps/step-4.svg')} alt="step 3" />
                  <p className={['text-center', classes.strong].join(' ')}>Pengarna på kontot</p>
                  <p className="text-center">Signera lånehandlingen med BankID (eller bläckpenna). <b>Pengarna inom ett par dagar</b>.</p>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-12 justify-content-center d-flex">
                <button className="btn btn-outline-dark mt-5 rounded-pill">Se filmen!</button>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center text-center mt-5 py-5" style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/ikano-col.svg')} alt="Ikano" title="Ikano Bank" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/swedbank-col.png')} alt="Swedbank" title="Swedbank" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/resurs-col.svg')} alt="Resurs bank" title="Resurs Bank" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/ica-col.svg')} alt="Ica banken" title="ICA Banken" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/coop-col.svg')} alt="Coop MedMera bank" title="Coop MedMera Bank" />
              </div>
              <div className={classes.bankWidthDiv}>
                <img src={require('../../../../assets/banks/santander.svg')} alt="Santander" title="Santander Consumer Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/forex-col.svg')} alt="Forex bank" title="Forex Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/wasa-col.svg')} alt="Wasa kredit" title="Wasa Kredit" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/lendify-col.svg')} alt="Lendify" title="Lendify" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/komplettbank-col.svg')} alt="Komplett" title="Komplett" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/bluestep-col.svg')} alt="Spring Finance/Bluestep" title="Spring Finance/Bluestep" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/marginalen-col.svg')} alt="Marginalen bank" title="Marginalen Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/sevenday-col.svg')} alt="Sevenday finans" title="Sevenday Finans" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/svea-col.svg')} alt="SveaDirekt" title="SveaDirekt" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/konsument-col.gif')} alt="KonsumentKredit" title="KonsumentKredit" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/lanspar-col.svg')} alt="Lån &amp; spar bank" title="Lån &amp; Spar Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/goodcash-col.svg')} alt="Goodcash" title="GoodCash" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/fellow-finance-col.png')} alt="Fellow finance" title="Fellow Finance" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img className={classes.squareLogo} src={require('../../../../assets/banks/balanzia-col.svg')} alt="Balanzia" title="Balanzia" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/byax-col.svg')} alt="BYAX" title="BYAX" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/brocc-col.svg')} alt="Brocc" title="Brocc" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/collector-col.svg')} alt="Collector bank" title="Collector Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img className={classes.squareLogo} src={require('../../../../assets/banks/euro-loan-col.png')} alt="Euroloan" title="Euroloan" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/moneygo-col.svg')} alt="MoneyGo" title="MoneyGo" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/nordax-col.png')} alt="Nordax" title="Nordax" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/avida-col.svg')} alt="Avida bank" title="Avida Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/nordnet-col.png')} alt="Nordnet" title="Nordnet" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/remember-col.svg')} alt="Remember bank" title="Remember Bank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/moank_logo.svg')} alt="Moank" title="Moank" />
              </div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}>
                <img src={require('../../../../assets/banks/instabank_logo.svg')} alt="Instabank" title="Instabank" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 justify-content-center d-flex">
                <button className="btn btn-outline-dark mt-5 rounded-pill" onClick={() => {
                  let status = this.state.moreBanks;
                  this.setState({ moreBanks: !status });
                }}>Visa alla 30 {this.state.moreBanks ? <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}</button>
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

        <section className="py-5" style={{ backgroundColor: '#FF3926'}}>
          <div className="container">
            <div className="row text-center py-5">
              <div className="col-12">
                <h2 className="text-white h4 font-weight-bold">When you take a loan, it is clear that you want to get the best possible interest rate.</h2>
                <p className="text-light mb-0">Sambla offers a fast, free and safe solution for those who want to borrow money . What you are going to use the money for is up to you. By comparing private loans with over 30 banks at the same time, we help you find the loan with the best terms and the lowest interest rate.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qna py-5">
          <div className="container">

            <div className="row">
              <div className="col-12">
                <h2 className="text-center p-0">Questions and answers</h2>
                <Redline />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <hr/>
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.one ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.one;

                      this.setState({ questions: { ...this.state.questions, one: !status}})
                    }}>Is only a credit report made?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.one ? 'block' : 'none'}}>
                      <p>Yes! Although you get up to 30 different loan offers, only one credit report is made. However, all lenders who have taken it from your information must send a separate inquiry copy. In some cases, some banks may include additional information in addition to the information provided by UC to improve the quality of the credit decision.</p>
                      <p>In order to maximize the chance of good loan terms, we also recommend that you include a co-applicant in your comparison. This is often a great advantage when the banks make their assessment.</p>
                    </div>
                  </div>

                </div>
                
                <hr/>

                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.two ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.two;

                      this.setState({ questions: { ...this.state.questions, two: !status } })
                    }}>Is only a credit report made?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.two ? 'block' : 'none' }}>
                      <p>Yes! Although you get up to 30 different loan offers, only one credit report is made. However, all lenders who have taken it from your information must send a separate inquiry copy. In some cases, some banks may include additional information in addition to the information provided by UC to improve the quality of the credit decision.</p>
                      <p>In order to maximize the chance of good loan terms, we also recommend that you include a co-applicant in your comparison. This is often a great advantage when the banks make their assessment.</p>
                    </div>
                  </div>

                </div>
                  
                  <hr/>

                  
                
              </div>
            
              <div className="col-md-6">
                <hr/>
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.three ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.three;

                      this.setState({ questions: { ...this.state.questions, three: !status}})
                    }}>Is only a credit report made?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.three ? 'block' : 'none'}}>
                      <p>Yes! Although you get up to 30 different loan offers, only one credit report is made. However, all lenders who have taken it from your information must send a separate inquiry copy. In some cases, some banks may include additional information in addition to the information provided by UC to improve the quality of the credit decision.</p>
                      <p>In order to maximize the chance of good loan terms, we also recommend that you include a co-applicant in your comparison. This is often a great advantage when the banks make their assessment.</p>
                    </div>
                  </div>

                </div>
                
                <hr/>

                <div className="row">
                  <div className="col-lg-12">
                    <h4 className={[classes.accordion, 'h5', this.state.questions.four ? classes.accordionOpen : classes.accordionClosed].join(' ')} onClick={() => {
                      let status = this.state.questions.four;

                      this.setState({ questions: { ...this.state.questions, four: !status } })
                    }}>Is only a credit report made?</h4>

                    <div className="mt-3" style={{ display: this.state.questions.four ? 'block' : 'none' }}>
                      <p>Yes! Although you get up to 30 different loan offers, only one credit report is made. However, all lenders who have taken it from your information must send a separate inquiry copy. In some cases, some banks may include additional information in addition to the information provided by UC to improve the quality of the credit decision.</p>
                      <p>In order to maximize the chance of good loan terms, we also recommend that you include a co-applicant in your comparison. This is often a great advantage when the banks make their assessment.</p>
                    </div>
                  </div>

                </div>
                  
                  <hr/>

                  
                
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
                  <li><a href="/samla-lan/">Collect loans</a></li>
                  <li><a href="/lana-pengar/">Borrow money</a></li>
                  <li><a href="/billan/">Car loan</a></li>
                  <li><a href="/trygghetsforsakring/">Trygghetsförsäkring</a></li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-12">
                <ul className="list-unstyled">
                  <li><a href="/om-sambla/">About us</a></li>
                  <li><a href="/fragor-och-svar/">Questions and answers</a></li>
                  <li><a href="/kontakta-sambla/">Contact Us</a></li>
                  <li><a href="/sambla-forklarar/">Sambla explains</a></li>
                  <li><a id="complaintLink" href="/fragor-och-svar/#qComplaint">If you are not satisfied</a></li>
                  <li><a target="blank_" href="/assets/documents/dataskyddspolicy_och_cookies.pdf">Data Protection Policy &amp; Cookies</a></li>
                  <li><a target="blank_" href="/assets/documents/anvandaravtal.pdf">User Agreement</a></li>
                  <li><a href="https://jobb.sambla.se">Work with us</a></li>
                  <li><a href="/press/">Press</a></li>
                  <li><a href="/sitemap.xml">Sitemap</a></li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-12">
                <ul className="list-unstyled">
                  <li><a href="/lana-pengar/lana-50000/">Borrow 50000</a></li>
                  <li><a href="/lana-pengar/lana-100000/">Borrow 100,000</a></li>
                  <li><a href="/lana-pengar/lana-150000/">Borrow 150000</a></li>
                  <li><a href="/lana-pengar/lana-200000/">Borrow 200,000</a></li>
                  <li><a href="/lana-pengar/lana-250000/">Borrow 250000</a></li>
                  <li><a href="/lana-pengar/lana-300000/">Borrow 300,000</a></li>
                  <li><a href="/lana-pengar/lana-350000/">Borrow 350000</a></li>
                  <li><a href="/lana-pengar/lana-400000/">Borrow 400,000</a></li>
                  <li><a href="/lana-pengar/lana-500000/">Borrow 500,000</a></li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 white text-center">
                <a href="https://www.sambla.no/">Sambla.no&nbsp; </a><a href="https://www.sambla.fi/">Sambla.fi</a>
                <p className='text-light'>2018 © Sambla AB - Org. no: 556974-8378 Strandvägen 5B, 114 51 Stockholm</p>
              </div>
            </div>
          </div>
        </footer>
      </Aux>
    )
  }
}