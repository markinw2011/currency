import CurrencyCompoent from './components/CurrencyComponent';
import money from './img/money.png'

function App() {
  return (
    <div>
      <img src={money} alt="logo" className="money-img"/>
      <h1>แอพแปลงสกุลเงิน</h1>
      <div className='container'>
          <CurrencyCompoent/>
          <div className='equal'> = </div>
          <CurrencyCompoent/>
      </div>
    </div>
  )
}

export default App;
