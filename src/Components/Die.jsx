import React from 'react'

const Die = ({value,isHeld, holdDice}) => {

    const styles ={
        backgroundColor:isHeld? "#59E391" : "white"
    }
  return (
    <div
     style={styles}
      className='die-face'
      onClick={holdDice}
      >
       <span className='die-num'>{value}</span>
    </div>
  )
}

export default Die