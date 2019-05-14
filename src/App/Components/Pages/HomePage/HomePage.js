import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './HomePage.css';
import Redline from '../../Redline/Redline';
import Calculator from '../../Calculator/Calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class HomePage extends React.Component {

  state = {
    moreBanks: false
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

            <div className="d-flex justify-content-center align-items-center text-center mt-5 py-5" style={{flexWrap:'wrap', flexDirection: 'row'}}>
              <div className={classes.bankWidthDiv}><img src={require('../../../../assets/banks/ikano-col.svg')} alt="Ikano" title="Ikano Bank" /></div>
              <div className={classes.bankWidthDiv}><img src={require('../../../../assets/banks/swedbank-col.png')} alt="Swedbank" title="Swedbank" /></div>
              <div className={classes.bankWidthDiv}><img src={require('../../../../assets/banks/resurs-col.svg')} alt="Resurs bank" title="Resurs Bank" /></div>
              <div className={classes.bankWidthDiv}><img src={require('../../../../assets/banks/ica-col.svg')} alt="Ica banken" title="ICA Banken" /></div>
              <div className={classes.bankWidthDiv}><img src={require('../../../../assets/banks/coop-col.svg')} alt="Coop MedMera bank" title="Coop MedMera Bank" /></div>
              <div className={classes.bankWidthDiv}><img src={require('../../../../assets/banks/santander.svg')} alt="Santander" title="Santander Consumer Bank" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/forex-col.svg')} alt="Forex bank" title="Forex Bank" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/wasa-col.svg')} alt="Wasa kredit" title="Wasa Kredit" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/lendify-col.svg')} alt="Lendify" title="Lendify" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/komplettbank-col.svg')} alt="Komplett" title="Komplett" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/bluestep-col.svg')} alt="Spring Finance/Bluestep" title="Spring Finance/Bluestep" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/marginalen-col.svg')} alt="Marginalen bank" title="Marginalen Bank" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/sevenday-col.svg')} alt="Sevenday finans" title="Sevenday Finans" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/svea-col.svg')} alt="SveaDirekt" title="SveaDirekt" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/konsument-col.gif')} alt="KonsumentKredit" title="KonsumentKredit" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/lanspar-col.svg')} alt="Lån &amp; spar bank" title="Lån &amp; Spar Bank" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/goodcash-col.svg')} alt="Goodcash" title="GoodCash" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/fellow-finance-col.png')} alt="Fellow finance" title="Fellow Finance" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img className={classes.squareLogo} src={require('../../../../assets/banks/balanzia-col.svg')} alt="Balanzia" title="Balanzia" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/byax-col.svg')} alt="BYAX" title="BYAX" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/brocc-col.svg')} alt="Brocc" title="Brocc" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/collector-col.svg')} alt="Collector bank" title="Collector Bank" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img className={classes.squareLogo} src={require('../../../../assets/banks/euro-loan-col.png')} alt="Euroloan" title="Euroloan" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/moneygo-col.svg')} alt="MoneyGo" title="MoneyGo" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/nordax-col.png')} alt="Nordax" title="Nordax" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/avida-col.svg')} alt="Avida bank" title="Avida Bank" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/nordnet-col.png')} alt="Nordnet" title="Nordnet" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/remember-col.svg')} alt="Remember bank" title="Remember Bank" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/moank_logo.svg')} alt="Moank" title="Moank" /></div>
              <div className={[classes.bankWidthDiv, this.state.moreBanks ? null : classes.moreBank].join(' ')}><img src={require('../../../../assets/banks/instabank_logo.svg')} alt="Instabank" title="Instabank" /></div>
            </div>

            <div className="row">
              <div className="col-12 justify-content-center d-flex">
                <button className="btn btn-outline-dark mt-5 rounded-pill" onClick={() => {
                  let status = this.state.moreBanks;
                  this.setState({moreBanks: !status});
                }}>Visa alla 30 {this.state.moreBanks ? <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}</button>
              </div>
            </div>

          </div>
        </section>
      </Aux>
    )
  }
}