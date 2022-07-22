import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quotes from './assets/quotes.json'
import QuoteBox from './components/QuoteBox'
import CustomButton from './components/CustomButton'

function App() {
  const [position, setPosition] = useState(Math.floor(Math.random()*100))
  const [color, setColor] = useState('rgb(255, 0, 0)')


  return (
    <div className="App" style={{backgroundColor: color}}>
      <div className='quoteBox' style={{color: color}}>
        <QuoteBox quoteList={Quotes} position={position}/>
        <CustomButton setPosition={setPosition} setColor={setColor} color={color} />
      </div>
      
    </div>
  )
}

export default App
