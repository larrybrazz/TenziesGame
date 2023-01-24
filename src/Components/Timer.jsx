import React, { useState } from 'react'
import { useEffect } from 'react';

const Timer = ({tenzies,handleDieChange}) => {
    const [timer, setTimer]= useState(0);
    const [stopTimer, setStopTimer]= useState(handleDieChange)
    

const gameTimer=()=>{
    const seconds = `0${(timer%60)}`.slice(-2);
    const minutes= `${Math.floor(timer/60)}`;
    const realMinutes=`0${minutes % 60}`.slice(-2);
    const hours = `0${Math.floor(timer/3600)}`.slice(-2);
    return  `${hours}:${realMinutes}:${seconds}`
  }
  
    useEffect(()=>{
        const interval = setInterval(() => {
            setTimer((prev)=>prev + 1)   
        }, 1000);
      if(tenzies){
        clearInterval(interval)
      }
    },[stopTimer])


  return (
    <div>
        {gameTimer()}
    </div>
  )
}

export default Timer
