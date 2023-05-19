import { useState } from 'react';
import './App.css';
import Die from './components/Die';
import {nanoid} from "nanoid"
function App() {
const [arr , setArray] = useState(Number())
function rollDice () {
  setArray ( prevState => prevState.map((items) => {
    return  items.isHeld ? 
      items :
      NewDie()
  }) )
} 

function NewDie ( ) {
  return {value : Math.floor(Math.random() * 7) , 
    isHeld : false , 
    id : nanoid() 
  
  
  }
}

function log (id) {

  setArray(prevState => prevState.map((die) => {
    return id===die.id ? {...die , isHeld : !die.isHeld} :
    die

  }))

}




  function Number() {
    const Array= []
    for(let i =0 ; i<10 ; i++) {
      Array.push(NewDie())
    }
    return Array
  }

const dice = arr.map(items => {
  return <Die key={items.id} value={items.value} isHeld ={items.isHeld} log = {() => log(items.id , items.isHeld)}/>
})

function Random () {
   return setArray(Number)
}

  return (
    <main  >
    <div className='dice-container'>
      {dice}
  </div>
<button className='roll-dice' onClick={Random}>Roll</button>

    </main>
  );
}

export default App;
