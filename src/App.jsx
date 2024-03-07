import { useEffect, useState } from 'react'
import { CAGR } from './Cagr'
import { numberWithCommas } from './utils'
import BTCPrice from './BtcPrice'
import { DcaCalc } from './Dca'
import { CoastFi } from './CaostFi'
import { Fi } from './Fi'
import './App.css'

function App() {

  //needed to calc fi num
  const [annualExpenses, setAnnualExpenses] = useState(0)
  const [yearsOfWd, setYearsOfWd] = useState(25)

  //needed to calc coastFi
  const [rateOfReturn, setRateOfReturn] = useState(0)
  const [yearsUntilWd, setYearsUntilWd] = useState(0)

  //current btc price from coinbase
  const [btcPrice, setBtcPrice] = useState(null)
  const [error, setError] = useState(null)//api call error

  //dca info
  const [annualDca, setAnnualDca] = useState(0)
  const [dcaData, setDcaData] = useState([])
  

  const satsPerDolla = 100000000 / btcPrice

  const fireNum = (annualExpenses * yearsOfWd)
  const coastFINum = fireNum / ((1 + (rateOfReturn / 100)) ** yearsUntilWd)

  function calcEndValue(beginningValue, cagr, years) {
    return beginningValue * ((1 + cagr) ** years)
}

  return (
    <>
    <BTCPrice setBtcPrice={setBtcPrice} setError={setError} />
    {btcPrice && (
     <>
     <h3>&#x20BF; = &#x20BF;</h3>
      <p>${btcPrice} = &#x20BF;</p>
      <p>{satsPerDolla.toFixed()} <i className="fak fa-light"></i> / $</p>
     </>
    )}
    {btcPrice && (<DcaCalc annualDca={annualDca} setAnnualDca={setAnnualDca} setDcaData={setDcaData} yearsUntilWd={yearsUntilWd}/>)}
    {dcaData && (dcaData.map((data) => (
      <ul>
        <li>{data.year}</li>
      </ul>
    )) )}
    {annualDca > 0 && (
      <p>Annual DCA: ${numberWithCommas(annualDca.toFixed(2))}</p>
    )}

    {fireNum > 0 && (
      <p>Fire Num:  ${numberWithCommas(fireNum.toFixed(2))}</p>
    )}
    {coastFINum > 0 && (
      <p>CoastFI Num: ${numberWithCommas(coastFINum.toFixed(2))}</p>
    )}
    
    {annualExpenses !== 0 && 
      (<p>${numberWithCommas(annualExpenses)} for {yearsOfWd} years = ${numberWithCommas(fireNum.toFixed(2))}</p>
    )}
    {rateOfReturn > 0 && yearsUntilWd > 0 && (
      <>
      <p>With {yearsUntilWd} years until withdrawls begin if you have ${numberWithCommas(coastFINum.toFixed(2))} or more you can stop saving today. </p>
      <p>With an annual rate of return at {rateOfReturn}% you will achieve ${numberWithCommas(fireNum.toFixed(2))} in the next {yearsUntilWd} years</p>
      </>
    )}
    <CAGR />
    </>
  )
}

export default App
