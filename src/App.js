import {useEffect, useState} from "react"
import CurrencyComponent from './components/CurrencyComponent';
import money from './img/money.png'

function App() {
  
  const [currencyChoice,setCurrencyChoice] = useState([])
  
  const [fromCurrency,setFromCurrency] = useState("USD")
  const [toCurrency,setToCurrency] = useState("THB")
  
  useEffect(()=>{
    const url =`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url).then(res=>res.json())
    .then(data=>setCurrencyChoice([...Object.keys(data.rates)]))
  })
  return (
    <div>
      <img src={money} alt="logo" className="money-img"/>
      <h1>แอพแปลงสกุลเงิน</h1>
      <div className='container'>
          <CurrencyComponent currencyChoice={currencyChoice} selectCurrency={fromCurrency} changeCurrency={(e)=>setFromCurrency(e.target.value)}/>
          <div className='equal'> = </div>
          <CurrencyComponent currencyChoice={currencyChoice} selectCurrency={toCurrency} changeCurrency={(e)=>setToCurrency(e.target.value)}/>
      </div>
    </div>
  )
}

export default App;
