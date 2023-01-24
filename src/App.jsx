import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import Die from './Components/Die';
import Confetti from "react-confetti";
import {nanoid} from 'nanoid';
import { useEffect } from 'react';
import Timer from './Components/Timer';

function App() {
  
  const [arry, setarry] = useState(randomDieValue());
  const [tenzies , setTenzies]= useState(false);

  // let count = 0
  // useEffect(()=>{
  //   if(!tenzies){
  //    count += 1
  //   }
  //   console.log(count)
  // })

  useEffect(()=>{
   const allHeld = arry.every(die=>die.isHeld);
   const firstValue = arry[0].value;
   const allSameValue = arry.every(die=>die.value === firstValue);

   if(allHeld && allSameValue){
    setTenzies(true)
   }
  },[arry])

  function generateNewDie(){
    return { 
      value:Math.ceil(Math.random()*6),
      isHeld:false,
      id:nanoid()
    }
  }

  function randomDieValue(){
      const newDice = []
      for(let i = 0; i < 10 ; i++ ){
        newDice.push(generateNewDie())
      }
      return newDice
  }


  function handleDieChange(){
    if(!tenzies){
      setarry(prev=>prev.map(die=>{
        return die.isHeld ?
             die :
             generateNewDie()
      }))
    } else{
      setTenzies(false);
      setarry(randomDieValue())
    }
  }


  function handleClick(id){
    setarry(prev=>prev.map(die=>{
      return die.id === id ? 
            {...die, isHeld:!die.isHeld} :
            die
    }))
  }


  const newDie =arry.map((die,index)=><Die value={die.value} key={die.id}  isHeld={die.isHeld} holdDice={()=>handleClick(die.id)} />)
   

  return (
     <main className=''>
      {tenzies && <Confetti/>}
      <div> <Timer tenzies={tenzies} handleDieChange={handleDieChange}  /> </div>
       <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className= 'dice-container'>
        {newDie}
      </div>
      <button className='roll-dice' onClick={handleDieChange}> {tenzies ? " New Game" : " Roll"} </button>
     </main>
  ) 
}

export default App
